import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function test(req:Request,res:Response,next:NextFunction)
{
    console.log("middleware called")
    next()
}

export function dtoCheck(type:any)
{
        return async(req:Request,res:Response,next:NextFunction)=>{
        
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
        next();
        }
}