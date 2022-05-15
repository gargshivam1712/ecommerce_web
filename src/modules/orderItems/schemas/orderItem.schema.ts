import { Schema , Prop , SchemaFactory, MongooseModule } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { CartProduct } from "src/modules/cartProducts/schemas/cartProduct.schema";
import { Order } from "src/modules/orders/schemas/order.schema";
import { User } from "src/modules/users/schemas/user.schema";

@Schema()
export class OrderItem{

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'Order' })
    order_id : Order

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'CartProduct' })
    cart_product_id : CartProduct
}

export type OrderItemDocument = OrderItem & mongoose.Document

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem)

