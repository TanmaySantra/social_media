import { validate } from "class-validator";
import { Request, Response } from "express";
import { LoginDto } from "../dto/logindto";
import { myDataSource } from "../service/db_connection";
import { User } from "../models/user.model";
import { UserSignupDto } from "../dto/signup.dto";
import createHttpError from "http-errors";

export class AuthController{

    async login(data: LoginDto)
    {
        const userRepository = myDataSource.getRepository(User)
        const found = await userRepository.findOneBy({email: data.email})
        if(found) {
            return "Successful"
        } else {
            return Error("user does not exist with email "+data.email);
        }
    }

    async signup(data: UserSignupDto): Promise<User | Error>
    {
        const userRepository = myDataSource.getRepository(User)
        const found = await userRepository.findOneBy({email: data.email})
        if(found) {
            throw createHttpError(400, "user already exists with email "+data.email)
        }
        const user: User = new User();
        user.email = data.email;
        user.name = data.name;
        user.password = data.password;
        return await userRepository.save(user) 
    }

    static logout(req:Request,res:Response)
    {
        res.send("Logout Success")
    }

}