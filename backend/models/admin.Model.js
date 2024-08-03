import mongoose from "mongoose";
import { usuariosModel } from "./users.Model.js";


const schema = mongoose.Schema;
const adminSchema = new schema({

    // nombre:{
    //     type: String,
    //     required: true
    // },
    // correo:{
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // contrasena:{
    //     type: String,
    //     required: true
    // },

    CategoriaAdmin:{
        type: Boolean,
        required: true,
        default: true
    }

});

export const adminModel = usuariosModel.discriminator("admin",adminSchema)