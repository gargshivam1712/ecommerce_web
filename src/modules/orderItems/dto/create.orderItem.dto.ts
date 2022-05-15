import {IsNotEmpty , IsArray  , IsString, ValidateNested } from "class-validator"

export class CreateOrderItemDto{
    
    @IsNotEmpty()
    @IsString()
    order_id : string

    @IsNotEmpty()
    @IsString() 
    cart_product_id : string
}