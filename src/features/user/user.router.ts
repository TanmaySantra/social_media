import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/jwtVerification";

const userRouter = Router();
// const userController: UserController = new AuthController();

//protected route
userRouter.get(
  '/protected', 
  verifyToken,
  (req: Request, res: Response) => {
    res.send("ok")
  }
)

export default userRouter;