import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

connectionMongo();



app.listen(port, ()=> {

    console.log(`el servidor se esta escuchando en http://localhost:${port}`)
}

) 



