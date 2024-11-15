const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');


router.get('/', (req, res) => {
    console.log('req.oidc.isAuthenticated()', req.oidc.isAuthenticated());
    res.render('index', 
        {   title: 'Express Demo', 
            isAuthenticated: req.oidc.isAuthenticated(),
            user : req.oidc.user
        });
});

router.get('/productos', requiresAuth(), (req, res) => {
    console.log('req.oidc.isAuthenticated()', req.oidc.isAuthenticated());
    res.render('productos', 
        {   title: 'Productos', 
            isAuthenticated: req.oidc.isAuthenticated(),
            user : req.oidc.user
        });
});

module.exports = router;
