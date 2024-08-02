import { usuariosModel } from "../models/users.Model.js";



export const getUsers = async (req, res) => {

    try {
        let products = await usuariosModel.find();
        if (products.length === 0) {

            return res.status(404).json({ message: 'no se encontraron usuarios' });
        }

        return res.status(200).send(products);

    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
}
