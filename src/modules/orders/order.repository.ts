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
    
}