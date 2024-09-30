const express = require('express')
const app = express()
const port = 3000

const saludar = (nombre) => {
    console.log(`Hola ${nombre}`)
    return `Hola ${nombre}`
}

app.get('/', (req, res) => {
    let nombre = "Juan"
    res.send(saludar(nombre) + ', soy un servidor express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//usar nodemon para que se actualice automaticamente
//npm install -g nodemon
//nodemon index.js

// diferencia en instalar un paquete npm de manera global o local
//npm install -g nodemon //global y se guarda en la carpeta npm
//npm install nodemon   //local y se guarda en package.json
//npm install --save nodemon //local y se guarda en package.json
//npm install --save-dev nodemon //local y se guarda en package.json en devDependencies
