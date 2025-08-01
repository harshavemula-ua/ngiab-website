output "api_url" {
  description = "The API Gateway endpoint URL"
  value       = "${module.api_gateway.api_url}"
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = module.api_gateway.lambda_function_name
}

output "account_id" {
  description = "AWS Account ID"
  value       = module.api_gateway.account_id
}
