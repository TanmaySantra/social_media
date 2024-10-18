import { IsEmail, IsNotEmpty } from "class-validator";

class LoginDto{
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    password:string;
}