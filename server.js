import express from 'express';

let app = express();

app.get('/',(req,res)=>{
    res.send('<h5>Witaj na moim serwerze</h5>');
});
app.get('/api',(req,res)=>{
    res.send({
        name: 'Tomasz',
        lubi: [
            'programowanie',
            'gry planszowe'
        ]
    });
});
app.get('/bad',(req,res)=>{
    res.send({errorMessage: 'niepoprawny adres'});
});

app.listen(3333);