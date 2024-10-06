// Crear un servidor web con Node.js sin Express
// En esta app haremos un router básico para redirigir a las páginas de nuestro sitio web

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Solicitud hecha al Servidor creado con Node.js');
    res.setHeader('Content-Type', 'text/html');

    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/products':
            ruta += '/products.html';
            res.statusCode = 200;
            break;
        case '/services':
            ruta += '/services.html';
            res.statusCode = 200;
            break;
        case '/contact':
            ruta += '/contact.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    //Estatus codes 
    // 100 Range - informational response
    // 200 Range - success codes
    // 300 Range - redirection codes
    // 400 Range - client error codes
    // 500 Range - server error codes

    fs.readFile(ruta, (err, data) => {
        if (err) {
            res.write('Error al leer el archivo index.html');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });


});

server.listen(3000, () => {
    console.log('Server LISTO en http://localhost:3000');
});

// Instalar nodemon
// npm install -g nodemon
// Ejecutar el servidor
// nodemon practica16/index.js

