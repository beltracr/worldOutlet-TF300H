import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

import auth from "../middlewares/auth.js";

export const productsRouter = express.Router();



productsRouter.get('/', auth(), getProducts);

productsRouter.post('/', auth(), postProduct);

productsRouter.delete('/:id', auth(), deleteProductById);

productsRouter.put('/:id', auth(), putProductById);



export default productsRouter;