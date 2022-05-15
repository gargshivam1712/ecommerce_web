import { Injectable  } from "@nestjs/common";
import { Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { Product, ProductDocument } from "./schemas/product.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class ProductRepository extends EntityRepository<ProductDocument>{

    constructor(@InjectModel(Product.name) productModel : Model<ProductDocument>)
    {
        super(productModel)
    }
    
}