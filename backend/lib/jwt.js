import  jwt, { decode }  from "jsonwebtoken";
import dotenv from "dontev";

dotenv.config();



const claveSecreta = process.env.JWT_SECRET;


export function generarToken(payload){

    return new Promise ((resolve,reject)=>{
        jwt.sign(payload,claveSecreta,{expiresIn:"1h"},(error,token)=>{
            if(error){
                reject(new Error("Error al generar token"+ error.message));
            } else{
                resolve(token)
            }
        })
    })
}

export function verificarToken(token) {
    return new Promise((resolve,reject)=>
{
    jwt.verify(token,claveSecreta,(error, decoded)=>{
        if(error){
            reject (new Error ("error al decodificar token" + error.message));
        } else{
            resolve(decode);
        }

    })
})
}