import mongoose from "mongoose";

const schema = mongoose.Schema;
const adminSchema = new schema({
   
    CategoriaAdmin: {
        type: Boolean,
        required: true,
        default: true
    }
})

export const adminModel = mongoose.model("admin", adminSchema);