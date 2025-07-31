variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-west-2"
}
variable "openai_api_key" {
  description = "OpenAI secret project key"
  type        = string
  sensitive   = true
}