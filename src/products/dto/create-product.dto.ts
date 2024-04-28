import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    public name: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    public price: number
}
