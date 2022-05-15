import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { CartProduct , CartProductDocument } from "./schemas/cartProduct.schema"

@Injectable()
export class CartProductRepository extends EntityRepository<CartProductDocument>  {

    constructor(@InjectModel(CartProduct.name) cartProductModel : Model<CartProductDocument>)
    {
        super(cartProductModel)
    }

}