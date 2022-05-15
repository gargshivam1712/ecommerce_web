import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { Category , CategoryDocument } from "./schemas/category.schema"

@Injectable()
export class CategoryRepository extends EntityRepository<CategoryDocument>  {

    constructor(@InjectModel(Category.name) categoryModel : Model<CategoryDocument>)
    {
        super(categoryModel)
    }

}