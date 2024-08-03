import mongoose from "mongoose";
import { usuariosModel } from "./users.Model.js";

const schema = mongoose.Schema;
const adminSchema = new schema({
   
    CategoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

export const adminModel = usuariosModel.discriminator("admin", adminSchema);