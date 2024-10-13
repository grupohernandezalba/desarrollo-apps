const express = require('express');
const router = express.Router();


//https://www.convertsimple.com/convert-javascript-to-json/

//Validate JSON
//https://jsonlint.com/
//https://jsonformatter.curiousconcept.com/

// Fetch
//https://www.w3schools.com/jsref/api_fetch.asp
//https://www.freecodecamp.org/espanol/news/tutorial-de-fetch-api-en-javascript-con-ejemplos-de-js-fetch-post-y-header/



const articulos = [];

const obtieneArticulos = () => {

    // Solicitud GET (Request).
    fetch('https://grupohernandezalba.com/articulos.json')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => {
        //console.log(json.articulos);
        //articulos.push(json.articulos);
        json.articulos.forEach(articulo => {
            articulos.push(articulo);
        });
        console.log('Obteniendo articulos:',articulos);

    })    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

};

router.get('/articulos', (req, res) => {
    obtieneArticulos();
    res.render('articulos', { titulo: 'Artículos', articulos : articulos });
});

router.get('/articulos/nuevo', (req, res) => {
    res.render('nuevo', { titulo: 'Nuevo artículo' });
});

router.get('/articulos/:id', (req, res) => {
    console.log(req.params.id);
}); 




module.exports = router;