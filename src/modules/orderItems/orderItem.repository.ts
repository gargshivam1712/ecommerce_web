import { Injectable  } from "@nestjs/common";
import { Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { OrderItem, OrderItemDocument } from "./schemas/orderItem.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class OrderItemRepository extends EntityRepository<OrderItemDocument>{

    constructor(@InjectModel(OrderItem.name) orderItemModel : Model<OrderItemDocument>)
    {
        super(orderItemModel)
    }
    
}