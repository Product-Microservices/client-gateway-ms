import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderService, envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: OrderService,
        transport: Transport.TCP ,
        options: {
          host: envs.ordersMsHost,
          port: envs.ordersMsPort
        }
      },
    ])
  ],
  controllers: [OrdersController]
})
export class OrdersModule {}
