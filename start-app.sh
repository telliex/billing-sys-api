#!/bin/ash

# 獲取當前的日期和時間
current_time=$(date "+%Y-%m-%d %H:%M:%S")
echo "Current Time : $current_time"

echo "========================================"
echo "System Resource Usage:"
echo "========================================"

# 打印磁盤使用情況
echo "Disk Usage:"
df -h

echo "----------------------------------------"

# 打印記憶體使用情況
echo "Memory Usage:"
free -h

echo "----------------------------------------"

# 打印CPU使用情況
echo "CPU Usage:"
top -bn1 | grep load | awk '{printf "CPU Load: %.2f\n", $(NF-2)}'

echo "----------------------------------------"

# 打印網絡接口信息
echo "Network Interfaces:"
ip -br a

echo "========================================"

# 啟動您的 NestJS 應用程序
echo "Starting NestJS Application..."