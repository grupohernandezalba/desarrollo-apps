const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio', { titulo: 'Inicio'});
});

module.exports = router;