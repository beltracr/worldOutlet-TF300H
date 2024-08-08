import express from "express";
import dotenv from "dotenv";
import connectionMongo from "./config/db.js";
import productsRouter from "./routes/products.Route.js";
import adminRouter from "./routes/admin.routes.js";
import usuariosRouter from "./routes/userRoutes.js"

const app = express();
dotenv.config();
const port = process.env.PORT;

connectionMongo();

app.use(express.json())
app.use("/",productsRouter)
app.use('/admin', adminRouter);
app.use('/user', usuariosRouter);

app.listen(port, ()=> {

    console.log(`el servidor se esta escuchando en http://localhost:${port}`)
}

) 



