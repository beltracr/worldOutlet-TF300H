import { productModel } from "../models/products.Model.js";


<<<<<<< HEAD
//para visualizar los productos en la base de

export const getProducts = async (req, res) => {  
   
   try {        
        let products = await productModel.find();        
=======
   try {

        let products = await productModel.find();

        
>>>>>>> angeloGonzalez
        if (products.length === 0) {
           
            return res.status(404).json({ message: 'no se encontraron productos' });
        }
<<<<<<< HEAD
       
=======

>>>>>>> angeloGonzalez
        return res.status(200).send(products);

    } catch (error) {
       
        return res.status(500).json({ message: error.message });
    }
}

export const postProduct = async (req, res) => {
    
<<<<<<< HEAD
    
    const { nombre, imagen, descripcion, precio,  talla, color } = req.body;

    
    if (!nombre || !imagen  || !descripcion || !precio || !talla || !color) {
        return res.status(400).json({ message: 'Debe ingresar todos los campos requeridos, nombre, imagen, descripcion, precio, talla y color' });
=======
    const { nombre, imagen, precio, descripcion, talla } = req.body;

    if (!nombre || !imagen || !precio || !descripcion || !talla) {
        return res.status(400).json({ message: 'Debe ingresar todos los campos requeridos, nombre, imagen y precio' });
>>>>>>> angeloGonzalez
    }

    try {
        const newProduct = await productModel.create(req.body);
        
        return res.status(201).json(newProduct);

    } catch (error) {
        
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProductById = async (req, res) => {

    try {
        let idForDelete = req.params._id;
        let productDeleted = await productModel.findByIdAndDelete(idForDelete);
        
        if (!productDeleted) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para borrar' });
        }

        return res.status(200).json({ msg: 'Producto eliminado correctamente' });
    } catch (error) {
      
        return res.status(500).json({ message: error.message });
    }
}

export const putProductById = async (req, res) => {

    try {
        
        let idForUpdate = req.params._id;
       
      
        let productUpdated = await productModel.findByIdAndUpdate(idForUpdate, req.body);

        
        if (!productUpdated) {
            return res.status(404).json({ message: 'Lo siento! no se encontró producto para modificar' });
        }

        return res.status(200).json({ message: 'Producto actualizado correctamente' });

    } catch (error) {
        
        return res.status(500).json({ message: error.message });
    }
}