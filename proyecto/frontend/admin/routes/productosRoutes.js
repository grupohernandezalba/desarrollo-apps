const express = require('express');
const router = express.Router();
const axios = require('axios');

let productos = [];

router.get('/productos', (req, res) => {

    axios.get('http://localhost:3000/productos')
    .then(response => {
        productos = [];
        //console.log(response.data);
        response.data.forEach(producto => {
            productos.push(producto);
        });
        //console.log('Obteniendo productos:',productos);
        res.render('productos', { titulo: 'Productos', productos: productos });
    })
    .catch(err => console.log('Solicitud fallida', err));


});

router.get('/productos/nombre/:nombre', (req, res) => {

    axios.get('http://localhost:3000/productos/nombre/' + req.params.nombre)
    .then(response => {
        productos = [];
        //console.log(response.data);
        response.data.forEach(producto => {
            productos.push(producto);
        });
        //console.log('Obteniendo productos:',productos);
        res.render('productos', { titulo: 'Productos', productos: productos });
    })
    .catch(err => console.log('Solicitud fallida', err));


});

router.post('/productos', (req, res) => {

    console.log('Agregando producto:', req.body);
    axios.post('http://localhost:3000/productos', req.body)
    .then(response => {
        console.log('Producto agregado:', response.data);
        res.redirect('/productos');
    })
    .catch(err => console.log('Solicitud fallida', err));
});

router.get('/productos/:id', (req, res) => {
        console.log('Eliminando producto:', req.params.id);
        axios.delete('http://localhost:3000/productos/'+req.params.id)
        .then(response => {
            console.log('Producto eliminado:', response.data);
            res.redirect('/productos');
        })
        .catch(err => console.log('Solicitud fallida', err));
});

router.post('/productos/actualizar', (req, res) => {
    console.log('Actualizando producto:', req.body);

    let producto = {
        nombre: req.body.enombre,
        precio: req.body.eprecio,
        _id: req.body.eid
    };

    console.log('Producto:', producto);

    axios.put('http://localhost:3000/productos/'+ producto._id, producto)
    .then(response => { 
        console.log('Producto actualizado:', response.data);
        res.redirect('/productos');
    })
    .catch(err => console.log('Solicitud fallida', err));

} );


module.exports = router;