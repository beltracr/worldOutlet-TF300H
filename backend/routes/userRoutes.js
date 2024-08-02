import express from "express"

//import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"
import {getUsers} from "../controllers/user.controllers.js";

export const userRouter = express.Router();


userRouter.get('/usuarios',getUsers);
/*
userRouter.post('/registraruser',postuser);

userRouter.delete('/eliminaruser/:_id',deleteuserById);

userRouter.put('/actualizaruser/:_id',putuserById);
*/

export default userRouter;