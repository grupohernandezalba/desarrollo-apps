//const express = require('express');
import express from 'express';
const app = express();
//const productosRoutes = require('./routes/productosRoutes');
import productosRoutes from './routes/productosRoutes.js';

//const categoriasRoutes = require('./routes/categoriasRoutes');
import categoriasRoutes from './routes/categoriasRoutes.js';

//const usuariosRoutes = require('./routes/usuariosRoutes');
import usuariosRoutes from './routes/usuariosRoutes.js';

//const documentacionRoutes = require('./routes/documentacionRoutes');
import documentacionRoutes from './routes/documentacionRoutes.js';
 

app.set('view engine', 'ejs');
//app.engine('ejs', require('ejs').__express);
import ejs from 'ejs';
app.engine('ejs', ejs.renderFile);

// Body parser de express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const mongoose = require('mongoose');
import mongoose from 'mongoose';
//const conexion = require('./conexion');
import conexion from './conexion.js';

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
app.use(documentacionRoutes);

// Referencia
// https://www.youtube.com/watch?v=CnH3kAXSrmU



