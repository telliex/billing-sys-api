#!/bin/bash
###
 # @Description: 
 # @Anthor: Telliex
 # @Date: 2023-04-26 00:42:34
 # @LastEditors: Telliex.Chiu Telliex.Chiu@ecliudvalle.com.tw
 # @LastEditTime: 2023-06-26 22:04:15
### 
# cd /app
# bash build.sh ${API_MGT_REPORT} ${API_MGT_ELU} ${OLD_MGT} ${CRS} ${ENV} 
# pnpm build:${ENV} 
# cp -r dist/* ../usr/share/nginx/html 
# cp -r default.conf ../etc/nginx/conf.d/default.conf  
# echo ${ENV}
# echo ${API_MGT_REPORT}
# echo ${API_MGT_ELU}
# echo ${OLD_MGT}
# echo ${CRS}  


# 傳入的參數
# API_MGT_REPORT=$1
# API_MGT_ELU=$2
# OLD_MGT=$3
# CRS=$4
# CBMS=$5
# ENV=$6
# S3_REGION=$7
# S3_JSON=$8
# API_MGT_PERMISSION=$9
# API_SYS=${10}
# API_POWERBI_LAMBDA=${11}


# way1 : ok to go
# 將 Nginx 設定為服務狀態
# service nginx start
# nginx -g "daemon off;"

# way2 : ok to go
# 執行命令
echo "----------======------------"
echo ${ENV}
bash build.sh ${DB_HOST} ${DB_USERNAME} ${DB_PASSWORD} ${DB_DATABASE} ${DB_TYPE} ${ENV}
pnpm start
