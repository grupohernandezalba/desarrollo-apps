const express = require('express');
const router = express.Router();

const articulos = [
    { titulo: 'Artículo 1', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
    { titulo: 'Artículo 2', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
    { titulo: 'Artículo 3', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
];

router.get('/articulos', (req, res) => {
    res.render('articulos', { titulo: 'Artículos', articulos : articulos});
});

router.get('/articulos/nuevo', (req, res) => {
    res.render('nuevo', { titulo: 'Nuevo artículo' });
});

router.get('/articulos/:id', (req, res) => {
    console.log(req.params.id);
}); 




module.exports = router;