const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.get('/productos', (req, res) => {

    console.log('GET /productos');
    Producto.find()
        .then(resultado => {
            res.json(resultado);
            //res.render('productos', { titulo: "Lista de productos", productos: resultado });
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;