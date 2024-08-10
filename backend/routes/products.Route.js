import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

export const productsRouter = express.Router();



productsRouter.get('/',getProducts);

productsRouter.post('/',postProduct);

productsRouter.delete('/:_id',deleteProductById);

productsRouter.put('/:_id',putProductById);



export default productsRouter;