import { NextFunction, Request, Response, Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { dtoValidationMiddleware } from "../middleware/validation";
import { LoginDto } from "../dto/logindto";
import { UserSignupDto } from "../dto/signup.dto";

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
  dtoValidationMiddleware(UserSignupDto), 
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log("inside controller handler", req.body);
    try {
      const result = await authController.signup(req.body);
      res.send(result)
    } catch (err) {
      res.status(400).json({
        status:400,
        message: (err as Error).message
      })
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