const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articuloSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    disponible: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


const Articulo = mongoose.model('Articulo', articuloSchema);

module.exports = Articulo;

