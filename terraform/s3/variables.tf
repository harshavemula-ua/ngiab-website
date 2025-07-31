variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-west-2"
}

variable "filename" {
  description = "Filename Used for training the chatbot"
  type = string
  default = "ngen-info.json"
}

variable "bucket_name"{
  description = "S3 Bucket Name"
  type = string
  default = "ngen-chatbot-data-ua"
}