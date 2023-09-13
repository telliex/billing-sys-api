#!/bin/bash

# ================================================================================= #
# Copyright 2021 (c) eCloudvalley Digital Technology Co., Ltd. All Rights Reserved. #
# ================================================================================= #


# main process
main_process() {
    DB_HOST=$1
    DB_USERNAME=$2
    DB_PASSWORD=$3
    DB_DATABASE=$4
    DB_TYPE=$5
    ENV="$(echo ${6} | tr '[:upper:]' '[:lower:]')"

    ENV_TEMPLATE_NAME=".env.template"
    TARGET_ENV_FILE_NAME=".env"

    cat $ENV_TEMPLATE_NAME | sed -e 's|{{DB_HOST}}|'$DB_HOST'|g' | sed -e 's|{{DB_USERNAME}}|'$DB_USERNAME'|g' | sed -e 's|{{DB_TYPE}}|'$DB_TYPE'|g' | sed -e 's|{{DB_PASSWORD}}|'$DB_PASSWORD'|g' | sed -e 's|{{DB_DATABASE}}|'$DB_DATABASE'|g' >| "$TARGET_ENV_FILE_NAME"
}


USAGE="$(cat << EOF
Usage:
    build.sh [STAGE] [REGION] [TAG](Optional)

    Where [STAGE] can be one of the following:
        * dev
        * stage
        * demo
        * prod
    Where [REGION] can be one of the following:
        * us-east-1
        * us-west-2
    Where [TAG] can be one of the following:
        * dev
        * stage
        * uat
        * v1.17.X(version)
EOF
)"


main_process $*
