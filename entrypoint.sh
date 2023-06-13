#!/bin/bash
Tag="$(echo ${1} | tr '[:upper:]' '[:lower:]')"

aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 863203846708.dkr.ecr.us-west-2.amazonaws.com
docker build -t billing-sys-api .
docker tag billing-sys-api:latest 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-sys-api:${Tag}
docker push 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-sys-api:${Tag}
