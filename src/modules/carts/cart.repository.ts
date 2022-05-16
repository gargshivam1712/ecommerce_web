import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { Cart , CartDocument } from "./schemas/cart.schema"

@Injectable()
export class CartRepository extends EntityRepository<CartDocument>  {

    constructor(@InjectModel(Cart.name) cartModel : Model<CartDocument>)
    {
        super(cartModel)
    }

    async getCartDetailsByUserId(filter : any)
    {
        return this.entityModel.findOne(filter).populate({path : "cart_products" , populate : {path : 'product_id'}})
    }

}