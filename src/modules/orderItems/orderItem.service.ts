import { Injectable } from "@nestjs/common";
import { CreateOrderItemDto } from "./dto/create.orderItem.dto"
import { OrderItemRepository } from "./orderItem.repository";
import { OrderItem } from "./schemas/orderItem.schema";

@Injectable()
export class OrderItemService{

    constructor(private orderRepository  : OrderItemRepository){}

    async createOrder(createOrderItemDto : CreateOrderItemDto) : Promise<OrderItem>
    {
        return this.orderRepository.create(createOrderItemDto)
    }

    async getOrder(filter : any) : Promise<OrderItem[]>
    {
        return this.orderRepository.find(filter)
    }
}