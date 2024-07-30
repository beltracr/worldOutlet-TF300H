import mongoose from "mongoose";


const schema = mongoose.Schema;
const productSchema = new schema({

    nombre:{
        type: String,
        required: true
    },

    imagen:{
        type: String
    },

    descripcion:{

        type: String,
        required: true
    },

    precio:{
        type:Number,
        require: true
    },
    
    talla:{
        type:[String],
        required: true
    }

});

export const productModel = mongoose.model("producto",productSchema);

