import { Trim } from "class-sanitizer";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserSignupDto {
  @IsNotEmpty()
  @Trim()
  name: string;

  @Trim()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8, {message: "Passwword should be at least 8 characters long"})
  password: string
}