const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.get('/productos', (req, res) => {

    console.log('GET /productos');
    Producto.find()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/productos', (req, res) => {
    console.log('POST /productos');
    console.log(req.body);
    const producto = new Producto(req.body);
    producto.save()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/productos/:id', (req, res) => {
    console.log('GET /productos/:id');
    Producto.findById(req.params.id)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
} );

router.put('/productos/:id', (req, res) => {
    console.log('PUT /productos/:id ' + req.params.id);
    console.log(req.body);
    //Producto.findByIdAndUpdate(req.params.id, req.body)
    Producto.updateOne({ _id : req.params.id }, req.body)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
} );

router.delete('/productos/:id', (req, res) => {
    console.log('DELETE /productos/:id ' + req.params.id);
    Producto.findByIdAndDelete(req.params.id)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/productos/categoria/:categoria', (req, res) => {
    console.log('GET /productos/categoria/:categoria');
    Producto.find({ categoria: req.params.categoria })
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/productos/precio/:precio', (req, res) => {
    console.log('GET /productos/precio/:precio');
    Producto.find({ precio: req.params.precio })
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
} );

//Obtener todos los productos en base a un filtro por nombre del producto
 
router.get('/productos/nombre/:nombre', (req, res) => {
    console.log('GET /productos/nombre/:nombre');
    Producto.find({ nombre: { $regex : '.*'+ req.params.nombre + '.*' } })
        .then(resultado => {
            res.json(resultado);
        })
        .catch(err => {
            res.send(err);
        });
} );


module.exports = router;