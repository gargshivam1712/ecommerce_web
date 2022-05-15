import { Controller , Post , Get , Body } from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { CreateOrderItemDto } from "./dto/create.orderItem.dto";
import { OrderItemService } from "./orderItem.service";
import { OrderItem } from "./schemas/orderItem.schema";

@Controller('/order_item')
export class OrderItemController extends BaseModuleController {

    getModule(): string {
        return 'OrderItem Module'
    }

    constructor(private readonly orderService : OrderItemService){
        super()
    }

    @Post('/create')
    async createOrder(@Body() createOrderItemDto : CreateOrderItemDto ) : Promise < OrderItem>
    {
        return this.orderService.createOrder(createOrderItemDto)
    }

    @Get('/all')
    async getOrderAll(@Body() filter : any)
    {
        return this.orderService.getOrder(filter)
    }
}