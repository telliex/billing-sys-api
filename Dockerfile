FROM node:16-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g pnpm && pnpm install

# Copy the application files
COPY . .

# Set the environment variables
ARG A_ENV
ARG A_DB_DATABASE
ARG A_DB_HOST
ARG A_DB_PASSWORD
ARG A_DB_USERNAME
ARG A_DB_TYPE


ENV ENV $A_ENV
ENV REGION us-west-2
ENV DB_DATABASE $A_DB_DATABASE
ENV DB_HOST $A_DB_HOST
ENV DB_PASSWORD $A_DB_PASSWORD
ENV DB_USERNAME $A_DB_USERNAME
ENV DB_TYPE $A_DB_TYPE


# Install required system tools
RUN apk update && apk add --no-cache procps iproute2

RUN chmod +x start-app.sh
# CMD ["build_api.sh", "dev"]

# CMD [ "pnpm", "start" ]
CMD ["node", "setup-env.js"]


# # 基於 Ubuntu 映像構建 Docker 容器
# FROM ubuntu:latest as build-stage

# ARG DEBIAN_FRONTEND=noninteractive
# # 更新 Ubuntu 的套件庫
# # 安裝 Node.js 和 NPM
# # 安裝 Nginx
# # 安裝 Node.js 和 Nginx
# RUN apt-get update && \
#     apt-get install -y curl gnupg2 && \
#     apt-get install -y awscli

# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
#     apt-get install -y nodejs nginx

# # 將 Nginx 預設設定檔案刪除
# RUN rm /etc/nginx/sites-enabled/default

# WORKDIR /app
# COPY package*.json ./
# RUN npm install -g pnpm && pnpm install
# COPY . .


# # 開啟監聽端口，以便外部流量可以到達 Nginx
# EXPOSE 80

# RUN chmod +x build_website.sh
# CMD ["./build_website.sh"]







# FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
# WORKDIR /app

# ENV DOTNET_CLI_TELEMETRY_OPTOUT 1

# # copy csproj and restore as distinct layers
# COPY ./src/*.csproj ./
# # Add customerized nuget config to use private nuget service
# COPY ./NuGet.Config ./
# RUN dotnet restore

# # copy everything else and build
# COPY ./src/ ./
# RUN dotnet publish -c Release -o out

# # build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:6.0
# WORKDIR /app
# COPY --from=build-env /app/out .

# # 路由參數 在image設定起起來的路由port位置
# ENV ASPNETCORE_URLS http://*:5000

# # 環境變數 如需要在本地端，包此專案image起Container，需開啟此設定參數
# # ENV ASPNETCORE_ENVIRONMENT="Dev"

# # 啟動應用程式
# ENTRYPOINT ["/app/ContractAPI"]

# # ----------------How to Run this Project in Docker Container---------
# # 1.you can use vs code
# # 2.Read Dockerfile
# # 3.open ASPNETCORE_ENVIRONMENT parameter in Dockerfile
# # 4.commed  "docker build -t billing-contract-api:local ."
# # 5.commed  "docker run --rm -d -p 5876:5000 billing-contract-api:local"
# # 6.check url "http://localhost:5876/swagger/index.html"
# # 7.check url Get "http://localhost:5876/keepalive"
# #    ※如果是使用遠端remote開發，需再確認連線阜port是否開發機與本機(或跳板機)有對應
