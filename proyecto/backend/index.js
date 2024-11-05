const express = require('express');
const app = express();
const productosRoutes = require('./routes/productosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');

const mongoose = require('mongoose');
const conexion = require('./conexion');

mongoose.connect(conexion)
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch(err => {
        console.log('Error al conectar a la base de datos', err);
    });

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});


app.use(productosRoutes);
app.use(categoriasRoutes);
app.use(usuariosRoutes);
