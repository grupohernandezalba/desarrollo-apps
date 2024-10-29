const express = require('express');
const app = express();
const nosotrosRoutes = require('./routes/nosotrosRoutes');
const contactoRoutes = require('./routes/contactoRoutes');
const notFound404Routes = require('./routes/notFound404Routes');
const articulosRoutes = require('./routes/articulosRoutes');
const inicioRoutes = require('./routes/inicioRoutes');

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('Middleware ejecutado');
    next();
});

app.use(inicioRoutes);
app.use(articulosRoutes);
app.use(nosotrosRoutes);
app.use(contactoRoutes);
app.use(notFound404Routes);



