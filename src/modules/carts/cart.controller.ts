import { Controller , Post , Get , Body, Put , Param } from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create.cart.dto";
import { Cart } from "./schemas/cart.schema";

@Controller('/cart')
export class CartController extends BaseModuleController{
    getModule(): string {
        return 'Cart Module'
    }

    constructor(private readonly cartService  : CartService)
    {
        super()
    }

    @Post('/create')
    async createCart(@Body() createCartDto : CreateCartDto) : Promise<Cart>
    {
        return this.cartService.createCart(createCartDto)
    }

    @Get('/all')
    async getCartAll(@Body()filter : any) : Promise<Cart>
    {
        return this.cartService.getCart(filter)
    }

    @Put('/remove_all_cartproduct/:id')
    async removeAllCartProduct(@Param('id') id : string)
    {
        return this.cartService.removeAllCartProduct(id)
    }




    
}