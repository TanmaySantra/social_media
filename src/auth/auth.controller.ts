import { validate } from "class-validator";
import { Request, Response } from "express";
import { LoginDto } from "./logindto";
import { myDataSource } from "../config/dbconfig";
import { User } from "../features/user/user.model";
import { UserSignupDto } from "../auth/signup.dto";
import createHttpError from "http-errors";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthController{

    async login(data: LoginDto)
    {
        const userRepository = myDataSource.getRepository(User)
        const found = await userRepository.findOneBy({email: data.email})
        if(!found) {
            throw createHttpError(400, "Invalid credentials")
        }
        const passwordMatch = await compare(data.password, found.password);
        if(!passwordMatch) {
            throw createHttpError(400, "Invalid credentials")
        }
        const token = sign({ userId: found.id, userEmail: found.email }, 'secretkey', {
            expiresIn: '1h',
        });

        return {
            name: found.name,
            email: found.email,
            gender: found.gender,
            pronoun: found.pronoun,
            profilePic: found.profile_pic,
            token: token
        };
    }

    async signup(data: UserSignupDto): Promise<any>
    {
        const userRepository = myDataSource.getRepository(User)
        const found = await userRepository.findOne({where: {email: data.email}})
        if(found) {
            throw createHttpError(400, "user already exists with email "+data.email)
        }
        const user: User = new User();
        user.email = data.email;
        user.name = data.name;
        const hashedPassword = await hash(data.password, 10);
        user.password = hashedPassword;
        return await userRepository.save(user) 
    }

    static logout(req:Request,res:Response)
    {
        res.send("Logout Success")
    }

}