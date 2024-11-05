const express = require('express');
const router = express.Router();
const axios = require('axios');

let articulos = [];

const obtieneArticulos = async () => {
    try {
        const response = await axios.get('https://grupohernandezalba.com/articulos.json')

        articulos = [];
        response.data.articulos.forEach(articulo => {
            articulos.push(articulo);
        });
        console.log('Se obtuvieron ' + articulos.length + ' articulos.');
    } catch (error) {
        console.error('Solicitud fallida', error);
    } 
}



router.get('/articulos', (req, res) => {
    obtieneArticulos();
    res.render('articulos', { titulo: 'Artículos', articulos : articulos });
});

router.get('/articulos/nuevo', (req, res) => {
    res.render('nuevo', { titulo: 'Nuevo artículo' });
});

router.get('/articulos/:id', (req, res) => {
    console.log(articulos[req.params.id]);
    res.render('detalleArticulo', { titulo: 'Detalle artículo', articulo: articulos[req.params.id] });
    console.log(req.params.id);
}); 




module.exports = router;