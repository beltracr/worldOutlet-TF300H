import {Router} from "express"

import {getProducts, postProduct, putProductById, deleteProductById } from "../controllers/products.Controller.js"

export const productsRouter = Router();


productsRouter.get('/',getProducts);

productsRouter.post('/',postProduct);

productsRouter.delete('/:id',deleteProductById);

productsRouter.put('/:id',putProductById);


export default productsRouter;