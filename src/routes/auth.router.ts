import { NextFunction, Request, Response, Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { dtoValidationMiddleware } from "../middleware/validation";
import { LoginDto } from "../dto/logindto";
import { UserSignupDto } from "../dto/signup.dto";
import createHttpError from "http-errors";

const authRouter = Router();
const authController: AuthController = new AuthController();
authRouter.post(
  "/login", 
  dtoValidationMiddleware(LoginDto),
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("inside controller handler", req.body);
    const result = await authController.login(req.body);
    res.send(result)
  }
)
authRouter.post(
  "/signup",
  // dtoValidationMiddleware(UserSignupDto), 
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("inside controller handler", req.body);
    try {
      const result = await authController.signup(req.body);
      req.body = result
      next()
    } catch (err) {
      next(err)
    }
  }
)
authRouter.get("/logout",AuthController.logout)

export default authRouter;

/**
 *    function(req, res, next)
 * 
 * 
 */