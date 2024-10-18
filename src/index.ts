import {  Express, Request, Response } from "express";
import * as express from 'express';
import {config} from "dotenv";
import { myDataSource } from "../service/db_connection";
import router from "../routes/router";
import { test } from "../middleware/testware";

myDataSource.initialize().then(()=>{
  console.log("Database Initialized");
}).catch((err)=>{
  console.log(err);
})

config();

const app: Express = express();
app.use(router);
app.use(express.json());
app.use(test)

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});