# OpenAI Chatbot Infrastructure

A Terraform-based infrastructure project that deploys an OpenAI-powered chatbot API on AWS, specifically designed to provide information about the NextGen In A Box (NGIAB) project.

## Architecture Overview

This project creates a serverless chatbot infrastructure using:

- **AWS Lambda**: Hosts the Node.js chatbot function that integrates with OpenAI's API
- **AWS API Gateway**: Provides HTTP endpoints for the chatbot API
- **AWS S3**: Stores and serves static data files (NGEN project information)
- **OpenAI Integration**: Uses OpenAI's API for natural language processing

## Project Structure

```
terraform/
├── main.tf                    # Main Terraform configuration
├── variables.tf               # Input variables
├── outputs.tf                 # Output values
├── api_gateway/              # API Gateway and Lambda module
│   ├── main.tf
│   ├── variables.tf
│   ├── output.tf
│   ├── lambda.zip            # Packaged Lambda function
│   └── lambda/               # Lambda source code
│       ├── index.js          # Main Lambda handler
│       ├── package.json      # Node.js dependencies
│       └── node_modules/     # Installed dependencies
└── s3/                       # S3 bucket and static files module
    ├── main.tf
    ├── variables.tf
    ├── output.tf
    └── files/
        └── ngen-info.json    # NGEN project data
```

## Features

- **Serverless Architecture**: Cost-effective, auto-scaling infrastructure
- **CORS Support**: Enables cross-origin requests for web applications
- **Public S3 Access**: Serves static data files with public read access
- **Environment Variables**: Secure handling of OpenAI API keys
- **Modular Design**: Organized into reusable Terraform modules

## Prerequisites

1. **AWS CLI** configured with appropriate credentials
2. **Terraform** >= 1.0 installed
3. **OpenAI API Key** from OpenAI platform
4. **AWS Account** with permissions to create:
   - Lambda functions
   - API Gateway resources
   - S3 buckets
   - IAM roles and policies

## Quick Start

### 1. Clone and Navigate
```bash
git clone <repository-url>
cd terraform
```

### 2. Set Variables
Create a `terraform.tfvars` file:
```hcl
region = "us-west-2"
openai_api_key = "your-openai-api-key-here"
```

### 3. Initialize and Deploy
```bash
terraform init
terraform plan
terraform apply
```

### 4. Get Outputs
After deployment, Terraform will output:
- `api_url`: The chatbot API endpoint
- `lambda_function_name`: Name of the deployed Lambda function
- `account_id`: Your AWS account ID
- `info_url`: Public URL for NGEN project data

## Usage

### API Endpoint
The chatbot API accepts POST requests at the `/chat` endpoint:

```bash
curl -X POST https://your-api-gateway-url/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about NGEN"}'
```

### Response Format
```json
{
  "response": "NextGen In A Box (NGIAB) is a containerized and user-friendly solution..."
}
```

## Configuration

### Variables

| Variable | Description | Type | Default | Required |
|----------|-------------|------|---------|----------|
| `region` | AWS Region | string | `us-west-2` | No |
| `openai_api_key` | OpenAI API Key | string | - | Yes |

### Outputs

| Output | Description |
|--------|-------------|
| `api_url` | Complete API Gateway endpoint URL with `/chat` path |
| `lambda_function_name` | Name of the deployed Lambda function |
| `account_id` | AWS Account ID |
| `info_url` | Public URL to access NGEN chatbot data file |

## About NGEN

This chatbot provides information about the **NextGen In A Box (NGIAB)** project:

- **Purpose**: Containerized solution for running the NextGen National Water Resources Modeling Framework locally
- **Funding**: NOAA through CIROH (Cooperative Institute for Research to Operations in Hydrology)
- **Features**: Local NextGen execution, input control, simplified Docker setup, evaluation tools, and visualization support

## Security Considerations

- OpenAI API key is stored as a sensitive variable
- S3 bucket has public read access for static files only
- Lambda function uses least-privilege IAM roles
- CORS is configured to allow cross-origin requests

## Cost Optimization

- **Lambda**: Pay-per-request pricing with generous free tier
- **API Gateway**: Pay-per-API call
- **S3**: Minimal storage costs for static files
- **No Always-On Resources**: Fully serverless architecture

## Troubleshooting

### Common Issues

1. **OpenAI API Key**: Ensure your API key is valid and has sufficient credits
2. **AWS Permissions**: Verify your AWS credentials have necessary permissions
3. **Region**: Ensure all resources are deployed in the same region

### Logs
Check Lambda function logs in CloudWatch:
```bash
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/openai-chatbot"
```

## Cleanup

To destroy all resources:
```bash
terraform destroy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the NGEN ecosystem and follows the same licensing terms.

## Support

For issues related to:
- **Infrastructure**: Open an issue in this repository
- **NGEN Project**: Visit the [NGIAB repository](https://github.com/CIROH-UA/NGIAB-CloudInfra)
- **OpenAI Integration**: Check OpenAI documentation

---

**Note**: This infrastructure is designed for development and testing. For production use, consider additional security measures, monitoring, and backup strategies.
