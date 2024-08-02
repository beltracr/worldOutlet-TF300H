import express from "express";
import { getUsuarios, postUsuarios, getUsuarioById, deleteUsuarioById, putUsuarioById } from "../controllers/user.controllers.js";


const usuariosRouter = express.Router();

// ruta para mostrar usuario por id
usuariosRouter.get('/obtenerUsuario:_id', getUsuarioById);
// ruta para mostrar todos los usuarios
usuariosRouter.get('/obtenerUsuarios', getUsuarios);
// ruta para crear usuarios
usuariosRouter.post('/registrarUsuarios', postUsuarios);
// ruta para actualizar usuario por id
usuariosRouter.put('/actualizarUsuario:_id',  putUsuarioById);
// ruta para eleiminar usuario por Id
usuariosRouter.delete('/eliminarUsuario:_id',  deleteUsuarioById);

export default usuariosRouter