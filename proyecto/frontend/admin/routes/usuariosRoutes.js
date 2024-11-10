const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res) => {
    res.render('usuarios', { titulo: 'Usuarios'});
});

module.exports = router;