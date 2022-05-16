import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { BaseModuleController } from "src/common/base.controller";
import { CreateUserDto } from "./dto/create.user.dto";
import { LoginUserDto } from "./dto/login.user.dto";
import { User } from "./schemas/user.schema";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController extends BaseModuleController {


    getModule(): string {
        return "User Module";
    }

    constructor(private readonly userService : UserService)
    {
        super();
    }

    @Post('/create')
    async createUser(@Body() createUserDto : CreateUserDto) : Promise<User>
    {
        console.log("crae detail0",createUserDto)
        return this.userService.createUser(createUserDto)
    }

    @Get('/all')
    async getAllUser(@Body() filter : any ) : Promise<User[]>
    {
        return this.userService.getUsers(filter)
    }

    @Post('/login')
    async loginUser(@Body() loginUserDto : LoginUserDto )
    {
        const login_details = await this.userService.loginUser(loginUserDto)
        if (login_details)
        {
            return login_details
        }
        else{
            throw new HttpException('User Unauthorized', HttpStatus.UNAUTHORIZED);
        }
    }

}