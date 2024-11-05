const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.get('/usuarios', (req, res) => {
    console.log('GET /usuarios');
    Usuario.find()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;