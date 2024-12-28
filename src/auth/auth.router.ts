import { NextFunction, Request, Response, Router } from "express";
import { dtoValidationMiddleware } from "../middleware/validation";
import { AuthController } from "./auth.controller";
import { LoginDto } from "./logindto";
import { UserSignupDto } from "./signup.dto";

const authRouter = Router();
const authController: AuthController = new AuthController();
authRouter.post(
  "/login", 
  dtoValidationMiddleware(LoginDto),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await authController.login(req.body);
      req.body = result
      next()
    } catch(err) {
      next(err)
    }
  }
)
authRouter.post(
  "/signup",
  dtoValidationMiddleware(UserSignupDto), 
  async (req: Request, res: Response, next: NextFunction) => {
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