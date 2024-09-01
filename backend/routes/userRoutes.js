import {Router} from "express";
import { getUsuarios, postUsuarios, deleteUsuarioById} from "../controllers/user.controllers.js";
import auth from "../middlewares/auth.js";


const usuariosRouter = Router();


// ruta para mostrar todos los usuarios
usuariosRouter.get('/', auth("Admin"), getUsuarios);
// ruta para crear usuarios
usuariosRouter.post('/', postUsuarios);
// ruta para eleiminar usuario por Id
usuariosRouter.delete('/:id', auth(),  deleteUsuarioById);

export default usuariosRouter
