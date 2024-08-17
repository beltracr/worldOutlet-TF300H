import { adminModel } from "../models/admin.Model.js";
import bcrypt from "bcryptjs";
// crear, mostrar todos, eliminar admin

// Petición POST para crear los administradores
export const postAdmin = async(req, response) =>{
    const {nombre, correo, contrasena,categoriaAdmin} = req.body;
    const codedPasswordAdmin = await bcrypt.hash(contrasena,10)

    try{
       
        const newAdmin = await adminModel.create({nombre,correo,contrasena:codedPasswordAdmin,categoriaAdmin})
        // solicitud de retorno
        return response.status(201).json({
            estado: '201',
            mensaje: 'Haz creado usuario administrador correctamente',
            datos: newAdmin
        })
    }catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrio un problema al crear tu administrador',
            datos: error
        })
    }
}

// Petición GET para mostrar todos los administradores

export const getAdmin = async (request, response) =>{
    try{
        const showAdmin = await adminModel.find();
        if(showAdmin.length === 0){
            return response.status(200).json({
                estado: '200',
                mensaje: 'No se encontraron Administradores en la Base de Datos',
                datos: null
            })                
        }
        return response.status(200).json({
            estado: '200',
            mensaje: 'Estos son todos los Administradores de la Base de Datos',
            datos: showAdmin
        })
    }catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrio un error al buscar los administradores',
            datos: error
        })
    }
}


// Petición DELETE para eliminar administrador por ID

export const deleteAdminById = async (req, res)=>{
    try {
        let idForDelete = req.params.id
        const adminDeleted = await adminModel.findByIdAndDelete(idForDelete);
       if(!idForDelete){
           return res.status(404).json({message: "no se encontro administrador"})
   
       }
    
        return res.status(200).json({
            estado:'200',
            mensaje: 'administrador eliminado Correctamente',
            datos: adminDeleted
        })
       } catch (error) {
        return res.status(400).json({
            estado: '400',
            mensaje: 'Ocurrió un problema al eliminar usuario',
            datos: error,
        })
       }
}