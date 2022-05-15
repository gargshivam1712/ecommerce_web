import {IsNotEmpty , IsArray  , IsString, ValidateNested } from "class-validator"

export class CreateCategoryDto{
    
    @IsNotEmpty()
    @IsString()
    category_name : string
}