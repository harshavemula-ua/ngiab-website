terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0"
}

variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-west-2"
}

provider "aws" {
  region                   = var.region
  shared_credentials_files = ["~/.aws/credentials"]
  profile                  = "default"
}

resource "aws_s3_bucket" "ngen_chatbot_bucket" {
  bucket        = "ngen-chatbot-data"
  force_destroy = true

  # NEW: Make sure ACL is NOT set
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
