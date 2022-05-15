import { IsEmail, IsNotEmpty, IsString , IsEnum } from 'class-validator';

export class LoginUserDto{

    @IsNotEmpty()
    @IsEmail()
    email :string;

    @IsNotEmpty()
    @IsString()
    password : string;
}