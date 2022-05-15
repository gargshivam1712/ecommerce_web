import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartModule } from "../carts/cart.module";
import { OrderController } from "./order.controller";
import { OrderRepository } from "./order.repository";
import { OrderService } from "./order.service";
import { OrderSchema  ,  Order } from "./schemas/order.schema";

@Module({
    providers : [OrderService , OrderRepository],
    controllers : [OrderController],
    imports : [MongooseModule.forFeature([{name : Order.name , schema : OrderSchema } ]) , CartModule]
})
export class OrderModule{}