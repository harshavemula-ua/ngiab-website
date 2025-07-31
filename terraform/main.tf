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

module "s3_resources" {
  source = "./s3"
}

module "api_gateway" {
  source         = "./api_gateway"
  openai_api_key = var.openai_api_key
}