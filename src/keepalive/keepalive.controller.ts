import { Controller, Get } from '@nestjs/common';

@Controller('keepalive')
export class KeepaliveController {
    @Get()
    keepalive() {
        return { status: 'ok' };
    }
}
