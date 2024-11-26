const express = require('express');
const app = express();

const inicioRoutes = require('./routes/inicioRoutes');
const productosRoutes = require('./routes/productosRoutes');
const notfound404Routes = require('./routes/notfound404Routes');

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(inicioRoutes);
app.use(productosRoutes);
app.use(notfound404Routes);



app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
    }
);

