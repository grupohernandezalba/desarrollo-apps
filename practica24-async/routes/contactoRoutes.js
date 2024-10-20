const express = require('express');
const router = express.Router();

router.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

module.exports = router;