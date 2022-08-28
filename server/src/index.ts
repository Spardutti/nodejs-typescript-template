import { config } from "dotenv";
// import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";

config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Express + Ts Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at this port  ${port}`);
});
