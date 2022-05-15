import { Controller , Post ,Body ,Get, Param, Delete  , Put} from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { CartProductService } from "./cartProduct.service";
import { CreateCartProductDto } from "./dto/create.cartProduct.dto";
import { UpdateCartProductDto } from "./dto/update.cartProduct.dto";
import { CartProduct } from "./schemas/cartProduct.schema";

@Controller('/cart_product')
export class CartProductController extends BaseModuleController{
    getModule(): string {
        return 'CartProduct Module'
    }

    constructor(private readonly cartProductService  : CartProductService)
    {
        super()
    }

    @Post('/create')
    async createCartProduct(@Body() createCartProductDto : CreateCartProductDto ) : Promise<CartProduct>
    {
        return this.cartProductService.createCartProduct(createCartProductDto)
    }

    @Get('/all')
    async getCartProductAll(@Body() filter : any) :  Promise<CartProduct[]>
    {
        return this.cartProductService.getCartProduct(filter)
    }

    @Delete('/delete/:id')
    async deleteCartProductById(@Param('id') id : string)
    {
        return this.cartProductService.deleteCartProduct(id)
    }

    @Put('/updateQuantity/:id')
    async updateCartProductById(@Param('id') id : string , @Body() quantity : UpdateCartProductDto)
    {
        return this.cartProductService.updateCartProductQuantity(id , quantity)
    }
    
}