const express = require('express');
const app = express();
const morgan = require('morgan');

// Requiriendo rutas
const routes = require('./routes');
const routesApi = require('./routes-api');

// Settings
app.set('appName', 'Mi primer Server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use((req, res, next) => {
    console.log('request url', req.url);
    next();
});

app.use(morgan('dev'));

//Rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, () => console.log('Server on port 3000', app.get('appName')));