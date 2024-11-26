import Producto from '../models/producto.js';

export const getProductos = (req, res) => {
    Producto.find()
    .then(productos => {
        res.json(productos);
    })
    .catch(err => {
        res.status(400).send(err);
    });
};

export const getProductoById =(req, res) => {
    Producto.findById(req.params.id)
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
};

export const borrarProducto = (req, res) => {
    Producto.deleteOne({ _id: req.params.id })
    .then( resultado => {
        res.json(resultado);
    })
    .catch( err => {
        res.send(err);
    })
};


export const actualizarProducto =(req, res) => {
    Producto.updateOne({ _id: req.params.id }, req.body )
    .then( producto => {
        res.json(producto);
    })
    .catch( err => {
        res.send(err);
    })
};


//Insertar producto
export const insertarProducto = (req, res) => {
    const producto = new Producto(req.body);
    producto.save()
    .then( producto => {
        res.json(producto);
    })
    .catch( err => {
        res.status(400).send(err);
    });
};

export default { getProductos, getProductoById, borrarProducto, actualizarProducto, insertarProducto };