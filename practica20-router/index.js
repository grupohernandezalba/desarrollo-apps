const express = require('express');
const app = express();
const nosotrosRoutes = require('./routes/nosotrosRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const notFound404Routes = require('./routes/notFound404Routes');
const articulosRoutes = require('./routes/articulosRoutes');
const inicioRoutes = require('./routes/inicioRoutes');

//View engine es un motor de plantillas que nos permite renderizar vistas en el servidor
// Usaremos EJS (Embedded JavaScript) para renderizar vistas en el servidor
// Para instalar EJS, ejecutamos el siguiente comando en la terminal:
// npm install ejs
// Luego, configuramos EJS en nuestro servidor
// app.set('view engine', 'ejs');

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});


app.use(express.static('public'));

//Un middleware es una función que se ejecuta en el servidor antes de que se ejecute una ruta
//Para crear un middleware, usamos el método use de la instancia de express
//El middleware se ejecuta para todas las rutas

app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
});

app.use(inicioRoutes);
app.use(articulosRoutes);
app.use(nosotrosRoutes);
app.use(contactoRoutes);
app.use(notFound404Routes);



