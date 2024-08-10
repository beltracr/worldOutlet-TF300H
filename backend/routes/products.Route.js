import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

export const productsRouter = express.Router();



productsRouter.get('/get',getProducts);

productsRouter.post('/crear',postProduct);

productsRouter.delete('/eliminarProducto/:_id',deleteProductById);

productsRouter.put('/:id',putProductById);



export default productsRouter;