const express = require('express');
const app = express();
 

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});

app.get('/', (req, res) => {
    res.sendFile('./views/inicio.html', { root: __dirname });
});

app.get('/nosotros', (req, res) => {
    res.sendFile('./views/nosotros.html', { root: __dirname });
});

app.get('/productos', (req, res) => {
    res.sendFile('./views/productos.html', { root: __dirname });
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});


//View engine es un motor de plantillas que nos permite renderizar vistas en el servidor
// Usaremos EJS (Embedded JavaScript) para renderizar vistas en el servidor
// Para instalar EJS, ejecutamos el siguiente comando en la terminal:
// npm install ejs
// Luego, configuramos EJS en nuestro servidor
// app.set('view engine', 'ejs');