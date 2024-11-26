const axios = require('axios');

const getProductos =  (req, res) => {

    axios.get('http://localhost:3000/productos')
    .then(response => {
        productos = [];
        //console.log(response.data);
        response.data.forEach(producto => {
            productos.push(producto);
        });
        //console.log('Obteniendo productos:',productos);
        res.render('productos', { titulo: 'Productos', productos: productos });
    })
    .catch(err => console.log('Solicitud fallida', err));


};


const getProductoPorNombre =  (req, res) => {

    axios.get('http://localhost:3000/productos/nombre/' + req.params.nombre)
    .then(response => {
        productos = [];
        //console.log(response.data);
        response.data.forEach(producto => {
            productos.push(producto);
        });
        //console.log('Obteniendo productos:',productos);
        res.render('productos', { titulo: 'Productos', productos: productos });
    })
    .catch(err => console.log('Solicitud fallida', err));


};

const agregarProducto =  (req, res) => {

    console.log('Agregando producto:', req.body);
    axios.post('http://localhost:3000/productos', req.body)
    .then(response => {
        console.log('Producto agregado:', response.data);
        res.redirect('/productos');
    })
    .catch(err => console.log('Solicitud fallida', err));
};

const borrarProducto =  (req, res) => {
        console.log('Eliminando producto:', req.params.id);
        axios.delete('http://localhost:3000/productos/'+req.params.id)
        .then(response => {
            console.log('Producto eliminado:', response.data);
            res.redirect('/productos');
        })
        .catch(err => console.log('Solicitud fallida', err));
};

const actualizarProducto =  (req, res) => {
    console.log('Actualizando producto:', req.body);

    let producto = {
        nombre: req.body.enombre,
        precio: req.body.eprecio,
        _id: req.body.eid
    };

    console.log('Producto:', producto);

    axios.put('http://localhost:3000/productos/'+ producto._id, producto)
    .then(response => { 
        console.log('Producto actualizado:', response.data);
        res.redirect('/productos');
    })
    .catch(err => console.log('Solicitud fallida', err));

};

module.exports = { getProductos , agregarProducto, borrarProducto, actualizarProducto , getProductoPorNombre };

