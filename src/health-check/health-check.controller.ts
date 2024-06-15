import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {

    @Get()
    healthCheck() {
        return 'Client Gateway Working is up and running';
    }
}
