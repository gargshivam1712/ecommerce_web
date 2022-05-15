import { Cart } from "src/modules/carts/schemas/cart.schema";
import { Product } from "src/modules/products/schemas/product.schema";
import {IsNotEmpty , IsArray  , IsString, ValidateNested, IsNumber } from "class-validator"

export class UpdateCartProductDto{

    @IsNotEmpty()
    @IsNumber()
    quantity : number
}