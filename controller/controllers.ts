import { validate } from "class-validator";
import { Request, Response } from "express";

export class AuthController{

    static async login(req:Request,res:Response)
    {

        const errors=await validate(req.body);
        if(Object.keys(errors).length)
        {
            res.status(400).json({
                status:400,
                message:errors.map(item=>({
                    [item.property]:Object.values(item.constraints as Object)
                }))
            })
            return;
        }

        res.send("Login Success")
    }

    static signup(req:Request,res:Response)
    {
        res.send("Signup Success")
    }

    static logout(req:Request,res:Response)
    {
        res.send("Logout Success")
    }

}