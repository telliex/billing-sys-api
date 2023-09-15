#!/bin/bash
Tag="$(echo ${1} | tr '[:upper:]' '[:lower:]')"

# aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 863203846708.dkr.ecr.us-west-2.amazonaws.com
# docker build --build-arg A_ENV=dev --build-arg A_DB_TYPE=mysql --build-arg A_DB_DATABASE=ecloud --build-arg A_DB_HOST=billing-dev-db.c3zkaaiu8aye.us-west-2.rds.amazonaws.com --build-arg A_DB_PASSWORD='zA#L2xetEcMu!o3^' --build-arg A_DB_USERNAME=telliex.chiu -t billing-system-api-node .
# docker tag billing-system-api-node:latest 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-system-api-node:${Tag}
# docker push 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-system-api-node:${Tag}


# Tag="$(echo ${1} | tr '[:upper:]' '[:lower:]')"

aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 863203846708.dkr.ecr.us-west-2.amazonaws.com
docker build --build-arg A_ENV=dev --build-arg A_DB_TYPE=mysql --build-arg A_DB_DATABASE=ecloud --build-arg A_DB_HOST=billing-dev-db.c3zkaaiu8aye.us-west-2.rds.amazonaws.com --build-arg A_DB_PASSWORD='zA#L2xetEcMu!o3^' --build-arg A_DB_USERNAME=telliex.chiu -t billing-sys-api .
docker tag billing-sys-api:latest 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-sys-api:${Tag}
docker push 863203846708.dkr.ecr.us-west-2.amazonaws.com/billing-sys-api:${Tag}
