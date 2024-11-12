//const express = require('express');
import express from 'express';
const router = express.Router();
//const Usuario = require('../models/usuario');
import Usuario from '../models/usuario.js';

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

//module.exports = router;

export default router;
