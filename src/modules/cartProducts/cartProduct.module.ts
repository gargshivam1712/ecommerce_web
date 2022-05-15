import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartModule } from "../carts/cart.module";
import { CartRepository } from "../carts/cart.repository";
import { CartService } from "../carts/cart.service";
import { CartProductController } from "./cartProduct.controller";
import { CartProductRepository } from "./cartProduct.repository";
import { CartProductService } from "./cartProduct.service";
import { CartProductSchema , CartProduct } from "./schemas/cartProduct.schema";

@Module({
    providers : [CartProductService , CartProductRepository ] ,
    controllers : [CartProductController],
    imports : [MongooseModule.forFeature([{name : CartProduct.name , schema : CartProductSchema}]) , CartModule] 
})
export class CartProductModule{}