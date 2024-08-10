import { usuariosModel } from "../models/users.Model.js";
import bcrypt from "bcryptjs";
import { generarToken } from "../lib/jwt.js";

const loginService = async (req,res) => {
    try{
        const {correo,contrasena} = req.body;
        const usuarioEncontrado = await usuariosModel.findOne({
            correo:correo
        });

        if(!usuarioEncontrado){
            return res.status(404).json({
                mensaje:"correo no registrado"
            })
        }
        const validacionContrasena = await bcrypt.compare(contrasena,usuarioEncontrado.contrasena)

        if (!validacionContrasena){
            return res.status(400).json({
                mensaje:"contrasena incorrecta"
            })
        }


        //autenticacion

        const payload ={
            id: usuarioEncontrado.id,
            name: usuarioEncontrado.nombre
        }

        const token = await generarToken(payload)
        return  res.status(200).json({
            mensaje: "inicio de sesion exitosa",
            tokenGenerado: token
        })
    }
    catch(error){
        return res.status(400).json({
            mensaje: "hubo un error al iniciar sesion",
            error: error.message || error
        })
    }
}

export default loginService