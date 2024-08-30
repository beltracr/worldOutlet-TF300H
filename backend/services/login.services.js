import { adminModel } from "../models/admin.Model.js";
import bcrypt from "bcryptjs";
import { generarToken } from "../lib/jwt.js";

const loginService = async (req,res) => {
    try{
        const {correo,contrasena} = req.body;
        const adminEncontrado = await adminModel.findOne({
            correo:correo
        });

        if(!adminEncontrado){
            return res.status(404).json({
                mensaje:"correo  incorrecto"
            })
        }
        const validacionContrasena = await bcrypt.compare(contrasena,adminEncontrado.contrasena)

        if (!validacionContrasena){
            return res.status(400).json({
                mensaje:"contrasena incorrecta"
            })
        }


        //autenticacion

        const payload ={
            id: adminEncontrado.id,
            name: adminEncontrado.nombre,
        }
        if (adminEncontrado.categoriaAdmin) {
            payload.isAdmin = true;
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