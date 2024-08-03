import mongoose from "mongoose";

const schema = mongoose.Schema;
const adminSchema = new schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    },
    CategoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
});

export const adminModel = mongoose.model("admin", adminSchema);