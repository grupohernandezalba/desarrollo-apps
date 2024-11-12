import Producto from '../models/producto.js';

export const getProductos = (req, res) => {

    console.log('GET /productos');
    Producto.find()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
};


