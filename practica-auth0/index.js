const express = require('express');
const app = express();

const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: '0X7a67FawCVvOwxkA338dqAXYrTmpiEy',
  issuerBaseURL: 'https://dev-pyizam6ghaivtjb6.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });


app.listen(3000, () => {
    console.log('Server Started');
    });




