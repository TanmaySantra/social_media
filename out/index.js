"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv_1 = require("dotenv");
const db_connection_1 = require("./service/db_connection");
const router_1 = require("./routes/router");
db_connection_1.myDataSource.initialize().then(() => {
    console.log("Database Initialized");
}).catch((err) => {
    console.log(err);
});
(0, dotenv_1.config)();
const app = express();
app.use(router_1.default);
app.use(express.json());
// app.use(test)
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
