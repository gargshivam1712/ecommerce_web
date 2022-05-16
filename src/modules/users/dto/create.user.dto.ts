import { Role } from "../schemas/user.schema";
import { IsEmail, IsNotEmpty, IsString , IsEnum } from 'class-validator';

export class CreateUserDto{

    @IsNotEmpty()
    @IsString()
    name : string;

    @IsNotEmpty()
    @IsEmail()
    email :string;

    @IsNotEmpty()
    @IsString()
    password : string;
}