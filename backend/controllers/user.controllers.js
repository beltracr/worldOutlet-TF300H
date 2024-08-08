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
            datos:error.message

        })
    }

    
}





export const deleteUsuarioById = async (req, res) => {
    try {
     let idForDelete = req.params.id
     const usuarioDeleted = await usuariosModel.findByIdAndDelete(idForDelete);
    if(!idForDelete){
        return res.status(404).json({message: "no se encontro usuario"})

    }
 
     return res.status(200).json({
         estado:'200',
         mensaje: 'Usuario eliminado Correctamente',
         datos: usuarioDeleted
     })
    } catch (error) {
     return res.status(400).json({
         estado: '400',
         mensaje: 'Ocurrió un problema al eliminar usuario',
         datos: error,
     })
    }
 }