import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { CartProduct } from "src/modules/cartProducts/schemas/cartProduct.schema";
import { Cart } from "src/modules/carts/schemas/cart.schema";
import { OrderItem } from "src/modules/orderItems/schemas/orderItem.schema";
import { User } from "src/modules/users/schemas/user.schema";

export enum OrderStatus{

    Created = 'Created',
    Confirmed = 'Confirmed',
    Successed = 'Successed',
    Cancel = 'Cancel'
}

@Schema()
export class Order{

    @Prop({default : OrderStatus.Created})
    status : OrderStatus 

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'User' })
    user_id : User

    @Prop([{required : true , type : mongoose.Schema.Types.ObjectId , ref : 'CartProduct' }])
    cart_items : CartProduct[]
}

export type OrderDocument = Order & mongoose.Document

export const OrderSchema = SchemaFactory.createForClass(Order)

