import express, { json, NextFunction, Request, Response } from "express";
import {config} from "dotenv";
import { myDataSource } from "./config/dbconfig";
import authRouter from "./auth/auth.router";
import { handleError } from "./middleware/errorHandler";
import { responseHandler } from "./middleware/responseHandler";
import mainRouter from "./base/base.router";




config();

const app = express();

app.use(json());
app.use("/api/v1", mainRouter);

app.use(responseHandler)
app.use(handleError)

const port = process.env.PORT || 8080;

myDataSource.initialize().then(()=>{
  console.log("Database Initialized");
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}).catch((err)=>{
  console.log(err);
})
