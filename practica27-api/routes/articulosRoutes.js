const express = require('express');
const router = express.Router();
//const axios = require('axios');

const Articulo = require('../models/Articulo');

//CRUD de articulos

let articulos = [];

router.get('/articulo/nuevo', (req, res) => {
    res.render('nuevo', { titulo: 'Nuevo artículo' });
}); 

router.get('/articulos', (req, res) => {
    Articulo.find().sort({ titulo: 1 })
        .then(resultado => {
            res.render('articulos', { titulo: "Lista de articulos", articulos: resultado });
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/articulo/agregar', (req, res) => {
    const articulo = new Articulo({
        titulo: 'Artículo de prueba 3',
        autor: 'Autor de prueba 3',
        contenido: 'Contenido de prueba 3'
    });

    articulo.save()
    .then(resultado => {
        res.send(resultado);
    })
    .catch(err => {
        res.send(err);
    });
});

router.get('/articulo/detalle/:id', (req, res) => {

    Articulo.findById(req.params.id)
        .then(resultado => {
            //res.send(resultado);
            res.render('detalleArticulo', { titulo: 'Detalle artículo', articulo: resultado });
        })
        .catch(err => {
            res.send(err);
        });

});

module.exports = router;