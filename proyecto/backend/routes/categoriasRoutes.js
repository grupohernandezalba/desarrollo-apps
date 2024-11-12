//const express = require('express');
import express from 'express';
const router = express.Router();
//const Categoria = require('../models/categoria');
import Categoria from '../models/categoria.js';

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

//module.exports = router;

export default router;