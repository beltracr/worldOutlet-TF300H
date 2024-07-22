import mongoose from "mongoose";


const schema = mongoose.Schema;
const productSchema = new schema({

    nombre:{
        type: String,
        require: true
    },

    imagen:{
        type: String
    },

    descripcion:{

        type: String,
        require: true
    },

    precio:{
        type:Number,
        require: true
    },
    
    talla:{
        type:Number,
        require: true
    }

});

export const productModel = mongoose.model("producto",productSchema);

