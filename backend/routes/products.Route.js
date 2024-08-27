import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

import auth from "../middlewares/auth.js";

export const productsRouter = express.Router();



productsRouter.get('/',  getProducts);

productsRouter.post('/',  postProduct);

productsRouter.delete('/:id',  deleteProductById);

productsRouter.put('/:id',  putProductById);



export default productsRouter;