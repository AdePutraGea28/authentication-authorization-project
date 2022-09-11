import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import route from "./routes/index.js";
import db from "./config/database/Mongodb.js";

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(route);


app.listen(3000, () => console.log("Server up and running..."));