// Crear un servidor web con Node.js sin Express

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Solicitud hecha al Servidor creado con Node.js');
    //console.log(req);
    console.log(req.url);
    console.log(req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    //res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Type', 'application/json');
    res.write('<h1>Hola servidor http</h1>');
    res.write('<li>Prueba 1</li>');
    res.write('<li>Prueba 2</li>');
    res.write('<li>Prueba 3</li>');
    res.end();

});

server.listen(3000, () => {
    console.log('Server LISTO en http://localhost:3000');
});

// Instalar nodemon
// npm install -g nodemon
// Ejecutar el servidor
// nodemon practica12/index.js

