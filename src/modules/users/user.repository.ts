import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EntityRepository } from "src/common/database/entity.repository";
import { UserDocument , User } from "./schemas/user.schema";

@Injectable()
export class UserRepository extends EntityRepository<UserDocument>  {

    constructor(@InjectModel(User.name) userModel : Model<UserDocument>)
    {
        super(userModel)
    }

    async find(entityFileterQuery: FilterQuery<UserDocument>): Promise<UserDocument[]> {
        console.log("update")
        return await this.entityModel.find(entityFileterQuery)
    }
}