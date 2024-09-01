import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

import auth from "../middlewares/auth.js";

export const productsRouter = express.Router();



productsRouter.get('/',  getProducts);

productsRouter.post('/', auth("Admin"),  postProduct);

productsRouter.delete('/:id', auth("Admin"), deleteProductById);

productsRouter.put('/:id', auth("Admin"), putProductById);



export default productsRouter;