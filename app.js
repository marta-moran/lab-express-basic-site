const express = require('express')
const hbs = require('hbs')
const path = require('path');
const PORT = 3000

const app = express()

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
// hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/works', (req, res) => {
    res.render('works');
});

app.get('/photo-gallery', (req, res) => {
    res.render('photo-gallery');
});

app.listen(PORT, () => {
    console.log(`Escuchando... ${PORT}`)
})
