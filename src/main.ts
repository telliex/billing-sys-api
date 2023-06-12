import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
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
  await app.listen(5000);
}
bootstrap();
