
output "ngen_info_url" {
  description = "Public URL to access the NGEN chatbot data file"
  value       = "https://${aws_s3_bucket.ngen_chatbot_bucket.bucket}.s3.${var.region}.amazonaws.com/${aws_s3_object.ngen_info.key}"
}

