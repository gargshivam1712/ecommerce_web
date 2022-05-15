import {IsNotEmpty , IsArray  , IsString, ValidateNested, IsNumber } from "class-validator"
import { Cart } from "../schemas/cart.schema"

export class UpdateCartDto{

    @IsNotEmpty()
    @IsString()
    cart_product_id : string

    @IsNotEmpty()
    @IsString()
    cart_id : Cart

}