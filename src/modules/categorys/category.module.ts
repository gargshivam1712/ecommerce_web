import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryController } from "./category.controller";
import { CategoryRepository } from "./category.repository";
import { CategoryService } from "./category.service";
import { Category, CategorySchema } from "./schemas/category.schema";

@Module({
    imports : [MongooseModule.forFeature([{name : Category.name , schema : CategorySchema}])],
    providers : [CategoryService , CategoryRepository],
    controllers : [CategoryController]
})
export class CategoryModule{}