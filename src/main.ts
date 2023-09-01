import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

function MiddleWareToAll(res: any, req: any, next: any) {
    // console.log('enter global middleware.....');
    next();
}

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        logger: ['warn'],
    });
    // app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static/' }); // static folder
    // app.setBaseViewsDir(join(__dirname, '..', 'views')); // views folder
    // app.setViewEngine('hbs'); // view engine
    // app.setGlobalPrefix('api/v1.0'); // global prefix
    app.use(MiddleWareToAll); // global middleware
    app.enableCors(); // cors
    // useContainer(app.select(AppModule), { fallbackOnErrors: true });
    await app.listen(5000, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
