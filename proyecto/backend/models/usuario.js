//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
});


const Usuario = mongoose.model('Usuario', usuarioSchema);

//module.exports = Usuario;
export default Usuario;

