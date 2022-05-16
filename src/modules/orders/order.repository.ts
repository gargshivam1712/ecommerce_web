import { Injectable  } from "@nestjs/common";
import { Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { Order, OrderDocument } from "./schemas/order.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class OrderRepository extends EntityRepository<OrderDocument>{

    constructor(@InjectModel(Order.name) orderModel : Model<OrderDocument>)
    {
        super(orderModel)
    }

    async getOrdersByUserId(user_id : string){
        return this.entityModel.find({user_id : user_id}).populate({path : 'cart_items' , populate : {path : "product_id"}})
    }

    async getOrderById(id : string)
    {
        return this.entityModel.findOne({_id : id}).populate({path : 'cart_items' , populate : {path : "product_id"}})
    }
    
}