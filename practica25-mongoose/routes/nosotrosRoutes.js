const express = require('express');

const router = express.Router();

router.get('/nosotros', (req, res) => {
    res.render('nosotros', { titulo: 'Nosotros' });
});

module.exports = router;