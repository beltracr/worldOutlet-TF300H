import mongoose from "mongoose";


const schema = mongoose.Schema;
const usuariosSchema = new schema({

    nombre:{
        type: String,
        require: true
    },

    correo:{
        type: String
    },

    direccion:{

        type: String,
        require: true
    }

});

export const usuariosModel = mongoose.model("usuarios",usuariosSchema);