const express = require('express');
const app = express();

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

app.get('/', (req, res) => {

    const blogs = [
        { titulo: 'Artículo 1', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
        { titulo: 'Artículo 2', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
        { titulo: 'Artículo 3', autor: 'Juan Perez', contenido: 'Lorem ipsum dolor sit amet consectetur' },
    ];

    res.render('index', { titulo: 'Inicio', blogs : blogs});
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros', { titulo: 'Nosotros' });
});

app.get('/agregar', (req, res) => {
    res.render('agregar', { titulo: 'Agregar blog' });
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

app.use((req, res) => {
    res.status(404).render('404', { titulo: '404' });
});




