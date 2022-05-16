import { HttpException, Injectable } from "@nestjs/common";
import { CartService } from "../carts/cart.service";
import { CreateOrderDto } from "./dto/create.order.dto"
import { UpdateOrderStatusDto } from "./dto/update.orderStatus.dto";
import { OrderRepository } from "./order.repository";
import { Order } from "./schemas/order.schema";

@Injectable()
export class OrderService{

    constructor(private orderRepository  : OrderRepository , private readonly cartService : CartService  ){}

    async createOrder(createOrderDto : CreateOrderDto) : Promise<Order>
    {
        console.log(createOrderDto , "order detaol")
        return this.orderRepository.create(createOrderDto).then(res =>{
            return res
        })
    }

    async getOrder(filter : any) : Promise<Order[]>
    {
        return this.orderRepository.find(filter)
    }

    async getOrderByUserId(id : string)
    {
        return await this.orderRepository.getOrdersByUserId(id)
    }

    async getOrderById(id : string)
    {
        let res = await this.orderRepository.getOrderById(id)
        if (res)
        {
            return res
        }
        else
        {
            throw new HttpException({
                message : "Order Id is not available",
                status : 400
            },400)
        }
    }

    async updateStatus(id  , updateOrderStatusDto : UpdateOrderStatusDto){
        return this.orderRepository.findByIdAndUpdate(id , {status : updateOrderStatusDto})
    }
}