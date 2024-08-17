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


// Petición GET para mostrar administrador por ID

export const getAdminById = async (request, response) =>{
    try{

        let idForGet = req.params._id;
        let adminGet = await adminModel.findByIdUpdate(idForGet, req.body);
    if (!adminGet){
        return response.status(404).json({
            estado: '404',
            mensaje: 'Uff ! No se encontro administrador',
            datos: adminGet 
        })
    }
        return response.status(200).json({
            estado: '200',
            mensaje: 'El administrador que buscas es: ',
            datos: adminGet
        })

    }catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrio un error al buscar el administrador',
            datos: error
        })
    }
}

// Petición PUT para actualizar administrador por ID

export const putAdminById = async (request, response) =>{
    try{
        let idForUpdate = req.params._id;
        let adminUpdate = await adminModel.findByIdUpdate(idForUpdate, req.body);
    if (!adminUpdate){
        return response.status(404).json({
        estado: '404',
        mensaje: 'Uff ! No se encontro administrador para actualizar',
        datos: adminUpdate
         })
        
    }
        return response.status(200).json({
        estado: '200',
        mensaje: '¡Administrador actualizado con Exito!',
        datos: adminUpdate
    })
    }catch(e){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrio un error al actualizar administrador',
            datos: error
        })
    }
}

// Petición DELETE para eliminar administrador por ID

export const deleteAdminById = async (request, response)=>{
    try{
        let idForDelete = req.params._id;
        let adminDelete = await adminModel.findByIdDelete(idForDelete, req.body);
        if (!adminDelete){
            return response.status(404).json({
                estado: '404',
                mensaje: 'Uff ! No se ha encontrado el administrador para eliminar',
                datos: adminDelete
           })
        }
        return response.status(200).json({
            estado: '200',
            mensaje: 'Se ha eliminado el Administrador con Exito',
            datos: adminDelete
        })
    }catch(error){
        return response.status(400).json({
            estado: '400',
            mensaje: 'Ocurrio un error al eliminar administrador',
            datos: error
        })
    }
}