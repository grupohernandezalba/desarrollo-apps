const express = require('express');
const router = express.Router();

router.get('/categorias', (req, res) => {
    res.render('categorias', { titulo: 'Categorías'});
});

module.exports = router;