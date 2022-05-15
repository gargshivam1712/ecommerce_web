import { Category } from "src/modules/categorys/schemas/category.schema";
import { User } from "src/modules/users/schemas/user.schema";
import {IsNotEmpty , IsString , IsNumber, ValidateNested} from "class-validator"
import { Type } from "class-transformer";

export class ProductCreateDto{
    
    @IsNotEmpty()
    @IsString()
    product_title : string

    @IsNotEmpty()
    @IsString()
    product_description : string

    @IsNotEmpty()
    @IsString()
    product_image_url : string;

    @IsNotEmpty()
    @IsNumber()
    price : number

    @IsNotEmpty()
    @IsString()
    seller_id : User;

    @IsNotEmpty()
    @IsString()
    category_id : Category
}