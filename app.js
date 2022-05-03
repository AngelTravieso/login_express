require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 4000;

// Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.use(express.static(__dirname + '/public'));

// Rutas web
app.use('/', require('./config/router'));


// app.post('/', (req, res) => {
//     res.send('post req');
// });

// app.put('/', (req, res) => {
//     res.send('put req');
// });

// app.delete('/', (req, res) => {
//     res.send('delete req');
// });


app.listen(port, () => {
    console.log(`Server running at: ${port}`);
});