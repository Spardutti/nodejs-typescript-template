import express from "express";
import { Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const helloYou = (name: any) => {
    name = "you" || name;
    console.log("hello" + name + "!");
};



const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Express + Ts Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at this port  ${port}`);
});