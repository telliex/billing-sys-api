const { spawn } = require('child_process');
const fs = require('fs');

// DB_PASSWORD='zA#L2xetEcMu!o3^'
// DB_HOST=billing-dev-db.c3zkaaiu8aye.us-west-2.rds.amazonaws.com
// DB_DATABASE=ecloud
// DB_USERNAME=telliex.chiu
// DB_TYPE=mysql

// 从环境变量中获取需要写入 .env 文件的值
const envVars = {
    ENV: process.env.ENV,
    REGION: process.env.REGION,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_TYPE: process.env.DB_TYPE,
};

// 将环境变量写入 .env 文件
const envFileContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

fs.writeFileSync('.env', envFileContent);

// 启动您的应用程序

const child = spawn('pnpm', ['start']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
