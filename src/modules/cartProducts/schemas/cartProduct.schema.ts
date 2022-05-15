import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose"
import { Cart } from "src/modules/carts/schemas/cart.schema";
import { Product } from "src/modules/products/schemas/product.schema";

export type CartProductDocument = CartProduct & mongoose.Document

@Schema()
export class CartProduct{

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'Cart'})
    cart_id : Cart

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'Product'})
    product_id : Product

    @Prop({required : true})
    quantity : number
}

export const CartProductSchema  = SchemaFactory.createForClass(CartProduct)