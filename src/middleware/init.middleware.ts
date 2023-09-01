import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class InitMiddleware implements NestMiddleware {
    use(req: FastifyRequest['raw'], res: FastifyReply['raw'], next: () => void) {
        // console.log(Date());
        next();
    }
}
