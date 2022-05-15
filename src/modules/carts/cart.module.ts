import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartController } from "./cart.controller";
import { CartRepository } from "./cart.repository";
import { CartService } from "./cart.service";
import { Cart, CartSchema } from "./schemas/cart.schema";

@Module({
    providers : [CartService , CartRepository ] ,
    controllers : [CartController],
    imports : [MongooseModule.forFeature([{name : Cart.name , schema : CartSchema}])] ,
    exports : [CartService]
})
export class CartModule{}