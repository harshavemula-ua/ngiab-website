output "api_url" {
  description = "The API Gateway endpoint URL"
  value       = "${module.api_gateway.api_url}/chat"
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = module.api_gateway.lambda_function_name
}

output "account_id" {
  description = "AWS Account ID"
  value       = module.api_gateway.account_id
}

output "ngen_info_url" {
  description = "Public URL to access the NGEN chatbot data file"
  value       = module.s3_resources.ngen_info_url
}