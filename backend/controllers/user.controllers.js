import { usuariosModel } from "../models/users.Model.js";
import bcrypt from "bcryptjs";

// crear usuarios
export const postUsuarios = async (req,res) =>{

    try{
        const {nombre, correo, contrasena,numerotelefono,direccion} = req.body;
        const codedPasswordUser = await bcrypt.hash(contrasena,10)



        if (!nombre || !correo || !contrasena || !numerotelefono || !direccion) {
            return res.status(400).json({message:"debe diligenciar todos los campos"})
        }
        const newUser = await usuariosModel.create({nombre,correo,contrasena:codedPasswordUser,numerotelefono, direccion})
        return res.status(201).json({
            estado: "201",
            mensaje: "usuario creado correctamente",
            datos:newUser
        })

    }catch(error){
        return res.status(400).json({
            estado: "400",
            mensaje:"ocurrio un problema al crear el usuario",
            datos: error
        })
    }

}


// obtener todos los usuarios

export const getUsuarios =async (req, res)=> {

    try {
        const allUsers = await usuariosModel.find();
        if(allUsers.length === 0){
            return res.status(201).json({
                estado:"201",
                mensaje: "no hay usuarios en la base de datos",
                datos: null
            })
        }
        return res.status(200).json({
            estado:"200",
            mensaje:"usuarios",
            datos:allUsers
        })


    }catch(error){
        return res.status(400).json({
            estado:"400",
            mensaje:"error",
            datos:error

        })
    }


}
//obtener por usuario

export const getUsuarioById = async (req,res) => {
    try {
        let idForGet = request.params.id
        if (idForGet === ":id") {
            return res.json({
                mensaje: "debe ingresar un id valido",
                id: idForGet
            })
        }

        const usuarioById = await usuariosModel.find(idForGet);
        if (!usuarioById) {
            return res.status(200).json({
                estado: "200",
                mensaje: "no se encontro usuario",
                dato: usuarioById
            })
        }
        return res.status(200).json({
            estado: '200',
            mensaje: 'Se encontró el usuario buscado',
            usuario: usuarioById
        })
    } catch (error) {

        return res.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al buscar un solo usuario',
            datos: error,
        })
    }
}