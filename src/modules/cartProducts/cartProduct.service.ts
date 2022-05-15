import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CartService } from "../carts/cart.service";
import { UpdateCartDto } from "../carts/dto/update.cart.dto";
import { Cart, CartDocument } from "../carts/schemas/cart.schema";
import { CartProductRepository } from "./cartProduct.repository";
import { CreateCartProductDto } from "./dto/create.cartProduct.dto";
import { UpdateCartProductDto } from "./dto/update.cartProduct.dto";
import { CartProduct } from "./schemas/cartProduct.schema";

@Injectable()
export class CartProductService {

    constructor(private cartProductRepository : CartProductRepository , private cartService : CartService )
    {}

    async createCartProduct(createCartProductDto : CreateCartProductDto) 
    {
        return this.cartProductRepository.create(createCartProductDto).then(res => {
            let updateCartDto : UpdateCartDto = {
                cart_id : res.cart_id,
                cart_product_id : res._id
            }
            this.cartService.addCartProductsById(updateCartDto)
            return res
        })
    }

    async deleteCartProduct(id : string){
        // let updateCartDto : UpdateCartDto = {
        //     cart_id : res.cart_id,
        //     cart_product_id : id
        // }
        return this.cartProductRepository.deleteById(id).then(res => {
           // this.cartService.removeCartProductById(updateCartDto)
            return res
        })
    }

    async getCartProduct(filter : any) : Promise<CartProduct[]>
    {
        return this.cartProductRepository.find(filter)
    }

    async updateCartProductQuantity(id : string, quantity : UpdateCartProductDto)
    {
        console.log(id , quantity , "asdfg")
        return this.cartProductRepository.findByIdAndUpdate(id , quantity)
    }

    
}
