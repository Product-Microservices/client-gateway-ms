import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDTO } from 'src/common';
import { OrderStatus, OrderStatusList } from '../enum/order-enum';


export class OrderPaginationDto extends PaginationDTO {


  @IsOptional()
  @IsEnum( OrderStatusList, {
    message: `Valid status are ${ OrderStatusList }`
  })
  status: OrderStatus;


}