const express = require('express');
const router = express.Router();

let productos = [];

const { getProductos, agregarProducto, borrarProducto, actualizarProducto, getProductoPorNombre } = require('../controllers/productosController.js');  

router.get('/productos', getProductos);
router.post('/productos', agregarProducto);
router.get('/productos/:id', borrarProducto);
router.post('/productos/:id', actualizarProducto);
router.get('/productos/nombre/:nombre', getProductoPorNombre);

module.exports = router;