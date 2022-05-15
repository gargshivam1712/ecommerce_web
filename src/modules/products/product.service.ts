import { Injectable } from "@nestjs/common";
import { ProductCreateDto } from "./dto/product.create.dto";
import { ProductRepository } from "./product.repository";
import { Product } from "./schemas/product.schema";

@Injectable()
export class ProductService{

    constructor(private productRepository  : ProductRepository){}

    async createProduct(productCreateDto : ProductCreateDto) : Promise<Product>
    {
        return this.productRepository.create(productCreateDto)
    }

    async getProduct(filter : any) : Promise<Product[]>
    {
        return this.productRepository.find(filter)
    }
}