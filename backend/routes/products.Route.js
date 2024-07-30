import express from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

export const productsRouter = express.Router();


productsRouter.get('/obtenerProductos',getProducts);

productsRouter.post('/registrarProducto',postProduct);


productsRouter.delete('/eliminarProducto/:_id',deleteProductById);


productsRouter.put('/actualizarProducto/:_id',putProductById);


export default productsRouter;