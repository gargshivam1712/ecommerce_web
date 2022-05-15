import { Controller, Get, Param  , Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Response} from "express"
import { join , resolve } from "path"

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('images/:imageId')
  getImage(@Param('imageId') imageId : string , @Res() res : Response) {
    console.log(imageId)
    res.sendFile(join(__dirname , '../images' , imageId))
  }

  @Get('/')
  getHome(@Res()res : Response)
  {
    res.sendFile(resolve(__dirname,'..','client','build','index.html'))
  }

}
