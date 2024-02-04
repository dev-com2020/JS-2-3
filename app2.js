const axios = require('axios');

const apiKey = '114f96ab7fa79786add85b6f90b65ae7';
const lat = '51.03800514094336';
const lon = '20.421424258406837';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


axios.get(url)
    .then(response => {
        console.log(`Temperatura: ${response.data.main.temp}`);
        console.log(`Pogoda: ${response.data.weather[0].main}`);
    })
    .catch(error => {
        console.log('Nieudane połączenie z serwerem API');
        console.log(error)
    });
