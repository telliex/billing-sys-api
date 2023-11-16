import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
// import { NestExpressApplication } from '@nestjs/platform-express';
import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';

import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { AppModule } from './app.module';

function MiddleWareToAll(res: any, req: any, next: any) {
    // console.log('enter global middleware.....');
    next();
}

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
        logger: WinstonModule.createLogger({
            transports: [
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        nestWinstonModuleUtilities.format.nestLike(),
                    ),
                }),
                // 其他 transports...
            ],
        }),
    });

    Sentry.init({
        dsn: 'https://b49504f68a362512886eed70618d4885@o4506058875928576.ingest.sentry.io/4506064666820609',
        integrations: [new ProfilingIntegration()],
        // Performance Monitoring
        tracesSampleRate: 1.0,
        // Set sampling rate for profiling - this is relative to tracesSampleRate
        profilesSampleRate: 1.0,
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
