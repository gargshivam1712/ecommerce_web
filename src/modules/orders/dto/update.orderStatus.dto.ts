import { OrderStatus } from "../schemas/order.schema"
import {IsNotEmpty , IsArray  , IsString, ValidateNested, IsEnum } from "class-validator"

export class UpdateOrderStatusDto{

    @IsNotEmpty()
    @IsEnum(OrderStatus)
    status : OrderStatus
}