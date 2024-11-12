//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
});


const Categoria = mongoose.model('Categoria', categoriaSchema);

//module.exports = Categoria;

export default Categoria;

