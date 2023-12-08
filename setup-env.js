const { spawn, exec } = require('child_process');
const fs = require('fs');

// 替換為您腳本的實際路徑
const scriptPath = '/app/start-app.sh';

exec(scriptPath, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
});

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

const env = process.env.ENV ? process.env.ENV.toLowerCase() : 'dev';

// 將環境變量寫入 .env 文件
const envFileContent = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

fs.writeFileSync('.env', envFileContent);

// 啓動應用程序
const child = spawn('pnpm', [`start:${env}`]);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
