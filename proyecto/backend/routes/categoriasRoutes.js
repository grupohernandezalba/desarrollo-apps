const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria');

router.get('/categorias', (req, res) => {
    console.log('GET /categorias');
    Categoria.find()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;