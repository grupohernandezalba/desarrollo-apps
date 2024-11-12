//const dotenv = require('dotenv');
import dotenv from 'dotenv';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const CLUSTER = process.env.CLUSTER;

//console.log(DB_USER);
//console.log(DB_PASSWORD);

const conexion = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER}/${DB_NAME}`;

//module.exports = conexion;
export default conexion;