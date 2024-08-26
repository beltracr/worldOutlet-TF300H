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
 
    talla:{
        type:[String],
        required: true
    },
    color:{
        type:[String],
        required: true
    },
    categoria:{
        type:String,
        required:true
    },

    cantidad:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        require: true
    }

});

export const productModel = mongoose.model("producto",productSchema);

