import express, { json, NextFunction, Request, Response } from "express";
import {config} from "dotenv";
import { myDataSource } from "./service/db_connection";
import authRouter from "./routes/auth.router";
import { handleError } from "./middleware/errorHandler";
import { responseHandler } from "./middleware/responseHandler";


myDataSource.initialize().then(()=>{
  console.log("Database Initialized");
}).catch((err)=>{
  console.log(err);
})

config();

const app = express();

app.use(json());
app.use(authRouter);

app.use(responseHandler)
app.use(handleError)

const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});