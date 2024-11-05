const express = require('express');
const router = express.Router();
const Articulo = require('../../models/Articulo');

// API REST BACKEND
router.get('/api/articulos', (req, res) => {
    Articulo.find().sort({ titulo: 1 })
        .then(resultado => {
            res.send(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/api/articulo/:id', (req, res) => {

    Articulo.findById(req.params.id)
        .then(resultado => {
            res.send(resultado);
        })
        .catch(err => {
            res.send(err);
        });

});

module.exports = router;