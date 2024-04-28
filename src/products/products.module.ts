import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductService, envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: ProductService,
        transport: Transport.TCP ,
        options: {
          host: envs.productMsHost,
          port: envs.productMsPort
        }
      },
    ])
  ],
  controllers: [ProductsController],
  providers: [],
})
export class ProductsModule {}
