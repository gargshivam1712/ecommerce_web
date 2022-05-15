import { Injectable } from "@nestjs/common";
import { CategoryRepository } from "./category.repository";
import { CreateCategoryDto } from "./dto/create.category.dto";
import { Category } from "./schemas/category.schema";

@Injectable()
export class CategoryService{

    constructor(private categoryRepository : CategoryRepository)
    {}
    
    async createCategory(createUserDto : CreateCategoryDto) : Promise<Category>
    {
        return this.categoryRepository.create(createUserDto)
    }

    async getCategory(filter : any) : Promise<Category[]>
    {
        return this.categoryRepository.find(filter)
    }
}