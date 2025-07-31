
output "info_url" {
  description = "Public URL to access the chatbot data file"
  value       = "https://${aws_s3_bucket.chatbot_bucket.bucket}.s3.${var.region}.amazonaws.com/${aws_s3_object.info.key}"
}

