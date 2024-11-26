//const express = require('express');
import express from 'express';
const router = express.Router();
//const Producto = require('../models/Producto');

//import Producto from '../models/producto.js';

//const bodyParser = require('body-parser');


//import bodyParser from 'body-parser';
//router.use(bodyParser.json());

import { getProductos, getProductoById, borrarProducto, actualizarProducto, insertarProducto } from '../controllers/productosController.js';


router.get('/productos', getProductos);
router.get('/productos/:id', getProductoById);
router.post('/productos', insertarProducto);
router.delete('/productos/:id', borrarProducto);
router.put('/productos/:id', actualizarProducto);



//module.exports = router;

export default router;
