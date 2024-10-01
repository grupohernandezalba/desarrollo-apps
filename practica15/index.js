// Crear un servidor web con Node.js sin Express

const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log('Solicitud hecha al Servidor creado con Node.js');
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            res.write('Error al leer el archivo index.html');
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });


});

server.listen(3000, () => {
    console.log('Server LISTO en http://localhost:3000');
});

// Instalar nodemon
// npm install -g nodemon
// Ejecutar el servidor
// nodemon practica12/index.js

