import { Injectable } from "@nestjs/common";
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
        let results = []
        // await this.orderRepository.find({user_id : id}).then(res => res.map( async (val) =>{
        //     let result = await val.populate({path : "cart_items" , populate : {path : 'product_id'}})
        //     console.log(result)
        //     results.push(result)
        //     return result
        // }))
        // return results
        return await this.orderRepository.find({user_id : id})
    }

    async getOrderById(id : string)
    {
        return (await this.orderRepository.findOne({_id : id})).populate({path : "cart_items" , populate : {path : 'product_id'}})
    }

    async updateStatus(id  , updateOrderStatusDto : UpdateOrderStatusDto){
        return this.orderRepository.findByIdAndUpdate(id , {status : updateOrderStatusDto})
    }
}