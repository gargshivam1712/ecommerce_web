import { Controller, Get , Body , Post } from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create.category.dto";
import { Category } from "./schemas/category.schema";

@Controller('/category')
export class CategoryController extends  BaseModuleController {
    getModule(): string {
        return 'Category Module';
    }

    constructor(private readonly categoryService : CategoryService)
    {
        super()
    }

    @Get('/all')
    async getCategory(@Body() filter : any ) : Promise<Category[]>
    {
        return this.categoryService.getCategory(filter)
    }

    @Post('/create')
    async createCategory(@Body() createCategoryDto : CreateCategoryDto ) : Promise<Category>
    {
        return this.categoryService.createCategory(createCategoryDto)
    }
    
}
