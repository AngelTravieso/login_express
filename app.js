require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 4000;

// Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Rutas web
app.use('/', require('./config/router'));

app.listen(port, () => {
    console.log(`Server running at: ${port}`);
});