import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';

import { MongooseModule } from "@nestjs/mongoose"
import { CategoryModule } from './modules/categorys/category.module';
import { ProductModule } from './modules/products/product.module';
import { CartModule } from './modules/carts/cart.module';
import { CartProductModule } from './modules/cartProducts/cartProduct.module';
import { OrderModule } from './modules/orders/order.module';
import { OrderItemModule } from './modules/orderItems/orderItem.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://Shiva:7gKKTn92l3vN7GWf@cluster0.yeel9.mongodb.net/squareboot?retryWrites=true&w=majority") , UserModule , CategoryModule , ProductModule , CartModule , CartProductModule , OrderModule , OrderItemModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
