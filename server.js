import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import fs from 'fs';

let app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method}: ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Zapis do loga nie jest możliwy');
        }
    });
    next();
});


app.get('/', (req, res) => {
    res.send('<h5>Witaj na moim serwerze</h5>');
});
app.get('/api', (req, res) => {
    res.send({
        name: 'Tomasz',
        lubi: [
            'programowanie',
            'gry planszowe'
        ]
    });
});
app.get('/bad', (req, res) => {
    res.send({ errorMessage: 'niepoprawny adres' });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'O nas',
        welcomeMessage: 'witam na mojej stronie',
        currentYear: new Date().getFullYear()
    });
});


app.listen(3333);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('upper', (text) => {
    return text.toUpperCase();
});