import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

export enum Role{
    Consumer = 'Consumer'  ,
    Seller = 'Seller'
}


@Schema()
export class User
{
    @Prop({required : true})
    name : string

    @Prop({required : true , unique : true })
    email : string

    @Prop({required:true})
    password : string

    @Prop({required : true , default : Role.Consumer})
    role : Role
}


export const userSchema = SchemaFactory.createForClass(User)