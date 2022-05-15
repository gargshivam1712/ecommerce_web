import { Schema , Prop , SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { CartProduct } from "src/modules/cartProducts/schemas/cartProduct.schema";
import { User } from "src/modules/users/schemas/user.schema";

export type CartDocument = Cart & mongoose.Document

@Schema()
export class Cart{

    @Prop({required : true , unique : true , type : mongoose.Schema.Types.ObjectId , ref : 'User'})
    user_id : User

    @Prop([{type : mongoose.Schema.Types.ObjectId , ref : 'CartProduct'}])
    cart_products : CartProduct[]

}

export const CartSchema = SchemaFactory.createForClass(Cart)