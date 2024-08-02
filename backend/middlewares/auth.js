import { decode } from "jsonwebtoken";
import { verificarToken } from "../lib/jwt.js";

const auth = (requiredRole) =>{
    return async (req, res, next) =>{
        let token = req.headers["authorization"];
        if(!token){
            return res.status(401).json({mensaje: "no se encontro token"})
        }

        token = token.split(" ")[1];


        if(!token){
            return res.status(400).json({
                mensaje: "token no autorizado"
            })
        } 

        try{

            const decoded = await verificarToken(token);
            console.log("token decodificado:", decoded);

            if(requiredRole === "admin" && !decoded.isAdmin){
                return res.status(403).json({
                    mensaje:"acceso denegado, no es administrador"
                });
            }
            req.user = decode
        } catch(error){
            return res.status(401).json({
                mensaje:"fallo la autenticacion con el token, token invalido",
                error: error.message || error
            })
        }
    }
}

export default auth