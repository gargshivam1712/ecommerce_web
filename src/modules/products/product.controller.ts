import { Controller, Post , Body , Get } from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { ProductCreateDto } from "./dto/product.create.dto";
import { ProductService } from "./product.service";
import { Product } from "./schemas/product.schema";

@Controller('/product')
export class ProductContoller extends BaseModuleController{
    getModule(): string {
        return "Product Module"
    }

    constructor(private readonly productService : ProductService)
    {
        super()
    }

    @Post('/create')
    async createProduct(@Body() createProductDto : ProductCreateDto) : Promise<Product>
    {
        return this.productService.createProduct(createProductDto)
    }

    @Get('/all')
    async getAllProduct(@Body() filter : any) : Promise<Product[]>
    {
        return this.productService.getProduct(filter)
    }
}