import { RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize } from "class-sanitizer";

export function dtoValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {
  return async (req, res, next) => {
    const dtoObj = plainToInstance(type, req.body);
    console.log("inside validation middleware", dtoObj)
    const errors: ValidationError[] = await validate(dtoObj)
    if (errors.length > 0) {
      res.status(400).json({
        status:400,
        message:errors.map(item=>({
            [item.property]:Object.values(item.constraints as Object)
        }))
      })
    } else {
      sanitize(dtoObj);
      req.body = dtoObj;
      next();
    }
  };
}