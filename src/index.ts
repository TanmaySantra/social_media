import express, { json, Request, Response } from "express";
import {config} from "dotenv";
import { myDataSource } from "./service/db_connection";
import authRouter from "./routes/auth.router";


myDataSource.initialize().then(()=>{
  console.log("Database Initialized");
}).catch((err)=>{
  console.log(err);
})

config();

const app = express();

app.use(json());
app.use(authRouter);

// app.use(test)

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});