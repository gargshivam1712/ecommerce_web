import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderItemController } from "./orderItem.controller";
import { OrderItemRepository } from "./orderItem.repository";
import { OrderItemService } from "./orderItem.service";
import { OrderItem, OrderItemSchema } from "./schemas/orderItem.schema";

@Module({
    providers : [OrderItemService , OrderItemRepository],
    controllers : [OrderItemController],
    imports : [MongooseModule.forFeature([{name : OrderItem.name , schema : OrderItemSchema}])]
})
export class OrderItemModule{}