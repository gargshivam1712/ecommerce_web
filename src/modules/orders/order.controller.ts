import { Controller   , Post , Get , Body, Param , Put } from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { BaseModuleController } from "src/common/base.controller";
import { CreateOrderDto } from "./dto/create.order.dto";
import { UpdateOrderStatusDto } from "./dto/update.orderStatus.dto";
import { OrderService } from "./order.service";
import { Order } from "./schemas/order.schema";

@Controller('/order')
export class OrderController extends BaseModuleController{
    getModule(): string {
        return 'Order Module'
    }

    constructor(private readonly orderService : OrderService){
        super()
    }

    @Post('/create')
    async createOrder(@Body() createOrderDto : CreateOrderDto ) : Promise < Order>
    {
        return this.orderService.createOrder(createOrderDto)
    }

    @Get('/getOrderById/:id')
    async getOrderById(@Param('id') id : string)
    {
        return this.orderService.getOrderById(id)
    }

    @Get('/getOrderByUserId/:user_id')
    async getOrderByUserId(@Param('user_id') user_id : string)
    {
        return this.orderService.getOrderByUserId(user_id)
    }

    @Put('/updateStatus:id')
    async updateStatus(@Param('id') id : string , @Body() updateOrderStatusDto : UpdateOrderStatusDto )
    {
        return this.orderService.updateStatus(id , updateOrderStatusDto)
    }
    
 
}