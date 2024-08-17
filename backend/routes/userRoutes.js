import {Router} from "express";
import { getUsuarios, postUsuarios, getUsuarioById, deleteUsuarioById, putUsuarioById } from "../controllers/user.controllers.js";


const usuariosRouter = Router();


// ruta para mostrar todos los usuarios
usuariosRouter.get('/', getUsuarios);
// ruta para crear usuarios
usuariosRouter.post('/', postUsuarios);
// ruta para eleiminar usuario por Id
usuariosRouter.delete('/:id',  deleteUsuarioById);

export default usuariosRouter
