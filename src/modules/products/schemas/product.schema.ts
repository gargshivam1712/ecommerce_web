import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose  from "mongoose";
import { Category } from "src/modules/categorys/schemas/category.schema";
import { User } from "src/modules/users/schemas/user.schema";

export type ProductDocument  = Product & mongoose.Document

@Schema()
export class Product{

    @Prop({required : true , unique : true })
    product_title : string

    @Prop({required : true})
    product_description : string

    @Prop({required : true})
    product_image_url : string

    @Prop({required:true})
    price : mongoose.Schema.Types.Decimal128

    @Prop({required : true , type : mongoose.Schema.Types.ObjectId , ref : 'User'})
    seller_id : User

    @Prop({type : mongoose.Schema.Types.ObjectId, ref: 'Category' , required : true})
    category_id : Category
}

export const ProductSchema = SchemaFactory.createForClass(Product)