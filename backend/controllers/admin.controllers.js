import { adminModel } from "../models/admin.Model.js";

// crear, mostrar todos, eliminar admin

// Petición POST para crear los administradores
export const postAdmin = async(request, response) =>{
    try{
        const newAdmin = await adminModel.create(request.body)
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