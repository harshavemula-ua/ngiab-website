terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0"
}

provider "aws" {
  region                   = var.region
  shared_credentials_files = ["~/.aws/credentials"]
  profile                  = "default"
}

resource "aws_s3_bucket" "ngen_chatbot_bucket" {
  bucket        = "ngen-chatbot-data-ua"
  force_destroy = true
}

resource "aws_s3_bucket_ownership_controls" "ownership" {
  bucket = aws_s3_bucket.ngen_chatbot_bucket.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.ngen_chatbot_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "PublicReadGetObject"
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.ngen_chatbot_bucket.arn}/*"
    }]
  })

  depends_on = [aws_s3_bucket_public_access_block.unblock]
}

resource "aws_s3_bucket_public_access_block" "unblock" {
  bucket                  = aws_s3_bucket.ngen_chatbot_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_cors_configuration" "cors" {
  bucket = aws_s3_bucket.ngen_chatbot_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }
}


resource "aws_s3_object" "ngen_info" {
  bucket       = aws_s3_bucket.ngen_chatbot_bucket.id
  key          = "ngen-info.json"
  source       = "${path.module}/files/ngen-info.json"
  content_type = "application/json"

  # DO NOT use acl here
}

output "ngen_info_url" {
  description = "Public URL to access the NGEN chatbot data file"
  value       = "https://${aws_s3_bucket.ngen_chatbot_bucket.bucket}.s3.${var.region}.amazonaws.com/${aws_s3_object.ngen_info.key}"
}



# Add local values for better organization
locals {
  project_name = "openai-chatbot"
  environment  = "prod"
  
  common_tags = {
    Project     = local.project_name
    Environment = local.environment
    ManagedBy   = "Terraform"
  }
}


resource "aws_iam_role" "lambda_exec_role" {
  name = "${local.project_name}-lambda-exec-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })

  tags = local.common_tags
}

resource "aws_iam_role_policy_attachment" "lambda_basic_exec" {
  role       = aws_iam_role.lambda_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/lambda"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_lambda_function" "openai_chatbot" {
  function_name = "${local.project_name}-function"
  role          = aws_iam_role.lambda_exec_role.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  filename      = data.archive_file.lambda_zip.output_path
  timeout       = 30
  memory_size   = 256
  
  environment {
    variables = {
      OPENAI_API_KEY = var.openai_api_key
      NODE_ENV       = "production"
    }
  }
  depends_on = [
    aws_iam_role_policy_attachment.lambda_basic_exec,
  ]
  tags = local.common_tags
}


resource "aws_apigatewayv2_api" "http_api" {
  name          = "${local.project_name}-api"
  protocol_type = "HTTP"
  description   = "OpenAI Chatbot HTTP API"

  cors_configuration {
    allow_credentials = false
    allow_headers     = ["content-type", "authorization"]
    allow_methods     = ["POST", "OPTIONS"]
    allow_origins     = ["*"]  # Restrict this to your domain in production
    max_age          = 86400
  }

  tags = local.common_tags
}

resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id                 = aws_apigatewayv2_api.http_api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.openai_chatbot.invoke_arn
  integration_method     = "POST"
  payload_format_version = "2.0"
  timeout_milliseconds   = 30000
}

resource "aws_apigatewayv2_route" "default" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /chat"
  target    = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"
}

resource "aws_lambda_permission" "api_gateway_invoke" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.openai_chatbot.arn
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "$default"
  auto_deploy = true
  tags = local.common_tags
}





