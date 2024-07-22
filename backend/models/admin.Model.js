import mongoose from "mongoose";


const schema = mongoose.Schema;
const adminSchema = new schema({

    nombre:{
        type: String,
        require: true
    },

    correo:{
        type: String
    },

    

});

export const adminModel = mongoose.model("administradores",adminSchema);