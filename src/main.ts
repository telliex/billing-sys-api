import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as session from 'express-session';
// 为了在使用class-validator的DTO类中也可以注入nestjs容器的依赖，需要在main.ts中添加如下代码：
import { useContainer } from 'class-validator';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' }); // static folder
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // views folder
  app.setViewEngine('hbs'); // view engine
  app.use(
    session({
      secret: 'It is a secret',
      cookie: {
        maxAge: 1000 * 60 * 3,
        httpOnly: true,
      },
      rolling: true, // session rolling
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(7800, '0.0.0.0');
}
bootstrap();
