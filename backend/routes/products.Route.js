import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

import auth from "../middlewares/auth.js";

export const productsRouter = express.Router();



productsRouter.get('/',  getProducts);

productsRouter.post('/', auth("admin"), postProduct);

productsRouter.delete('/:id', auth("admin"), deleteProductById);

productsRouter.put('/:id', auth("admin"), putProductById);



export default productsRouter;