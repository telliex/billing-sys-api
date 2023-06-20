import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// 为了在使用class-validator的DTO类中也可以注入nestjs容器的依赖，需要在main.ts中添加如下代码：
import { useContainer } from 'class-validator';
import { join } from 'path';
import * as cors from 'cors';

function MiddleWareToAll(res: any, req: any, next: any) {
  console.log('enter global middleware.....');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' }); // static folder
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // views folder
  app.setViewEngine('hbs'); // view engine
  app.setGlobalPrefix('api/v1.0'); // global prefix
  app.use(MiddleWareToAll); // global middleware
  app.use(cors); // cors

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(5000, '0.0.0.0');
}
bootstrap();
