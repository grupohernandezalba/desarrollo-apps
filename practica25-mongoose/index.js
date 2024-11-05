const express = require('express');
const app = express();
const nosotrosRoutes = require('./routes/nosotrosRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const notFound404Routes = require('./routes/notFound404Routes');
const articulosRoutes = require('./routes/articulosRoutes');
const inicioRoutes = require('./routes/inicioRoutes');

const Articulo = require('./models/articulo');

const dbUri = "mongodb+srv://info:DQvrIq2BRf59f7nr@cluster0.fkguy.mongodb.net/blog";

const mongoose = require('mongoose');

mongoose.connect(dbUri)
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch(err => {
        console.log('Error al conectar a la base de datos', err);
    });

app.get('/agregarArticulo', (req, res) => {
    const articulo = new Articulo({
        titulo: 'Artículo de prueba 3',
        autor: 'Autor de prueba 3',
        contenido: 'Contenido de prueba 3'
    });

    articulo.save()
        .then(resultado => {
            res.send(resultado);
        })
        .catch(err => {
            res.send(err);
        });
});

app.get('/obtenerArticulos', (req, res) => {
    Articulo.find().sort({ titulo: 1 })
        .then(resultado => {
            //res.send(resultado);
            res.render('articulos', { titulo: "Lista de articulos", articulos: resultado });
        })
        .catch(err => {
            res.send(err);
        });
});

app.get('/obtenerArticuloPorId', (req, res) => {

    Articulo.findById('671871ea13d9c26954de082a')
        .then(resultado => {
            res.send(resultado);
        })
        .catch(err => {
            res.send(err);
        });

});


app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});


app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('Middleware ejecutado con --watch');
    next();
});

app.use(inicioRoutes);
app.use(articulosRoutes);
app.use(nosotrosRoutes);
app.use(contactoRoutes);
app.use(notFound404Routes);

