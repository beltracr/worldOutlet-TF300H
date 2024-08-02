import mongoose from "mongoose";


const schema = mongoose.Schema;
const usuariosSchema = new schema({

    nombre:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true,
        unique: true

    },

    contrasena:{
        type: String,
        required: true

    },

    numeroTelefono:{
        type: Number,
    },

    direccion:{
        type: String,
        required: true
    }

});

export const usuariosModel = mongoose.model("usuarios",usuariosSchema);

// esta es una prueba