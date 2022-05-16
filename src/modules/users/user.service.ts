import { HttpException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create.user.dto";
import { LoginUserDto } from "./dto/login.user.dto";
import { User } from "./schemas/user.schema";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService
{
    constructor(private userRepository  : UserRepository){}

    async createUser(createUserDto : CreateUserDto) : Promise<User>
    {
        console.log(createUserDto , "details")
        let validate_details = await this.userRepository.findOne({email : createUserDto.email})
        console.log(validate_details ,"details" )
        if(validate_details)
        {
            throw new HttpException({
                status: 400 ,
                error: 'User already Registered',
              }, 400 );   
        }
        else{
            return this.userRepository.create(createUserDto)
        }
    }

    async getUsers(filter : any) : Promise<User[]>
    {
        return this.userRepository.find(filter)
    }

    async loginUser(loginUserDto : LoginUserDto) : Promise<User | null>
    {
        return this.userRepository.findOne(loginUserDto)
    }
}