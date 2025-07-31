output "api_url" {
  description = "The API Gateway endpoint URL"
  value       = "${aws_apigatewayv2_api.http_api.api_endpoint}/chat"
}
output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.openai_chatbot.function_name
}

data "aws_caller_identity" "current" {}

output "account_id" {
  description = "AWS Account ID"
  value       = data.aws_caller_identity.current.account_id
}
