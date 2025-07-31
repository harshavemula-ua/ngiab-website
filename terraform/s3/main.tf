resource "aws_s3_bucket" "chatbot_bucket" {
  bucket        = "${var.bucket_name}"
  force_destroy = true
}

resource "aws_s3_bucket_ownership_controls" "ownership" {
  bucket = aws_s3_bucket.chatbot_bucket.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_policy" "public_read_policy" {
  bucket = aws_s3_bucket.chatbot_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid       = "PublicReadGetObject"
      Effect    = "Allow"
      Principal = "*"
      Action    = "s3:GetObject"
      Resource  = "${aws_s3_bucket.chatbot_bucket.arn}/*"
    }]
  })

  depends_on = [aws_s3_bucket_public_access_block.unblock]
}

resource "aws_s3_bucket_public_access_block" "unblock" {
  bucket                  = aws_s3_bucket.chatbot_bucket.id
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}
resource "aws_s3_bucket_cors_configuration" "cors" {
  bucket = aws_s3_bucket.chatbot_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["*"]
    max_age_seconds = 3000
  }
}
resource "aws_s3_object" "info" {
  bucket       = aws_s3_bucket.chatbot_bucket.id
  key          = "${var.filename}.json"
  source       = "${path.module}/files/${var.filename}"
  content_type = "application/json"
}
