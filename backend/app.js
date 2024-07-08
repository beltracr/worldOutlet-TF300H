import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";
import productsRouter from "./routes/products.Route.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

connectionMongo();

app.use("/",productsRouter)



app.listen(port, ()=> {

    console.log(`el servidor se esta escuchando en http://localhost:${port}`)
}

) 



