import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";

import { UserService } from "./user.service";
import { User , userSchema } from "./schemas/user.schema"
import { UserRepository } from "./user.repository";

@Module({
    providers : [UserService , UserRepository],
    controllers : [UserController],
    imports : [MongooseModule.forFeature([{name : User.name , schema : userSchema }])]
})

export class UserModule {

}