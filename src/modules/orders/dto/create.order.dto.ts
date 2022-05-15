import { User } from "src/modules/users/schemas/user.schema"
import { OrderStatus } from "../schemas/order.schema"
import { OrderItem } from "../../orderItems/schemas/orderItem.schema"
import {IsNotEmpty , IsArray  , IsString, ValidateNested, IsEnum } from "class-validator"
import { CartProduct } from "src/modules/cartProducts/schemas/cartProduct.schema"

export class CreateOrderDto{
    
    @IsNotEmpty()
    @IsString()
    user_id : User

    @IsNotEmpty()
    cart_items : CartProduct[]
}