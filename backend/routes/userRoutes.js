import express from "express"

//import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"
import {getUsers} from "../controllers/user.controllers.js";

export const userRouter = express.Router();


userRouter.get('/usuarios',getUsers);
/*
productsRouter.post('/registrarProducto',postProduct);

productsRouter.delete('/eliminarProducto/:_id',deleteProductById);

productsRouter.put('/actualizarProducto/:_id',putProductById);
*/

export default userRouter;