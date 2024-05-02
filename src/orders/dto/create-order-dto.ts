import {
  ArrayMinSize,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { OrderItemDTO } from './order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type( () => OrderItemDTO)
  items: OrderItemDTO[]
}
