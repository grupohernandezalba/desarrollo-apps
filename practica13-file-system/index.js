//File system
const fs = require('fs');
//console.log(fs);
//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html


//Leer un archivo
const leerArchivo = (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString());
}

fs.readFile('./archivo.txt', leerArchivo);


//Escribir un archivo
const escribirArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo creado');
}

fs.writeFile('./nuevoArchivo.txt', 'Hola mundo', escribirArchivo);

//Eliminar un archivo
const eliminarArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo eliminado');
}

fs.unlink('./nuevoArchivo.txt', eliminarArchivo);
//fs.unlink('./nuevoArchivo2.txt', eliminarArchivo);

//Crear un directorio
const crearDirectorio = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Directorio creado');
}

fs.mkdir('./nuevoDirectorio', crearDirectorio);

//Eliminar un directorio
const eliminarDirectorio = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Directorio eliminado');
}

fs.rmdir('./nuevoDirectorio', eliminarDirectorio);

//Leer un directorio
const leerDirectorio = (err, files) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(files);
}

fs.readdir('./', leerDirectorio);

//Copiar un archivo
const copiarArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo copiado');
}

fs.copyFile('./archivo.txt', './copiaArchivo.txt', copiarArchivo);

//Mover un archivo
const moverArchivo = (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Archivo movido');
}

fs.rename('./copiaArchivo.txt', './copiaArchivo2.txt', moverArchivo);





