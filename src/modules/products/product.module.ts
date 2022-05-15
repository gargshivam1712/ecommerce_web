import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductContoller } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";
import { Product, ProductSchema } from "./schemas/product.schema";

@Module({
    providers : [ProductService , ProductRepository],
    controllers : [ProductContoller],
    imports : [MongooseModule.forFeature([{name : Product.name , schema : ProductSchema}])]
})
export class ProductModule{}