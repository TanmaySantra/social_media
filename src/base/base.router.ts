import { Router } from "express";
import authRouter from "../auth/auth.router";
import userRouter from "../features/user/user.router";

const mainRouter = Router()

mainRouter.use("/auth", authRouter)
mainRouter.use("/user", userRouter)

export default mainRouter