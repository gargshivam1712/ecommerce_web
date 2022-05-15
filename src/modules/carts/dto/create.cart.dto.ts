import { User } from "src/modules/users/schemas/user.schema"
import {IsNotEmpty , IsArray  , IsString, ValidateNested, IsNumber } from "class-validator"

export class CreateCartDto{

    @IsNotEmpty()
    @IsString()
    user_id : User

}