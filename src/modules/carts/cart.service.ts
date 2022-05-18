import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CartRepository } from "./cart.repository";
import { CreateCartDto } from "./dto/create.cart.dto";
import { UpdateCartDto } from "./dto/update.cart.dto";
import { Cart } from "./schemas/cart.schema";

@Injectable()
export class CartService {

    constructor(private cartRepository : CartRepository)
    {}

    async createCart(createCartDto : CreateCartDto) : Promise<Cart>
    {
        console.log("cart detials",createCartDto)
        let validate_details = await this.cartRepository.findOne({user_id : createCartDto.user_id})
        if (validate_details)
        {
            throw new HttpException({
                status: 400 ,
                error: 'Cart already created',
              }, 400 );
        }
        else{
            return this.cartRepository.create(createCartDto)
        }
    }

    async getCart(id : string) : Promise<Cart>
    {
        let result =  await this.cartRepository.getCartDetailsByUserId({user_id : id})
        if (result)
        {
            return result
        }
        else
        {
            throw new HttpException("Data is not available" ,  400)
        }
    }

    async addCartProductsById(updateCartDto : UpdateCartDto) : Promise<Cart>
    {
        let res = await this.cartRepository.findByIdAndUpdate(updateCartDto.cart_id , {$push : {cart_products : updateCartDto.cart_product_id}})
        console.log("update cart dto" , updateCartDto , "resu" , res)
        return res
    }

    async removeCartProductById(updateCartDto : UpdateCartDto) : Promise<Cart>
    {
        return this.cartRepository.findByIdAndUpdate(updateCartDto.cart_id , {$pull : { cart_products : {$in : [updateCartDto.cart_product_id]} }})
    }

    async removeAllCartProduct( id : string): Promise<Cart>{
        return this.cartRepository.findByIdAndUpdate(id , {cart_products : []} )
    }
    
}