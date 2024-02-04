const request = require('request');

request({
    url:'https://api.openweathermap.org/data/2.5/weather?lat=51.03800514094336&lon=20.421424258406837&appid=114f96ab7fa79786add85b6f90b65ae7',
    json: true
}, (error,response,body) => {
    if (error) {
        console.log('Nieudane połączenie z serwerem API');
    } else if (response.statusCode === 200) {
        console.log(`Temperatura: ${body.main.temp}`);
        console.log(`Pogoda: ${body.weather[0].main}`);
        console.log(`Lat: ${body.coord.lat}`);
        console.log(`Lon: ${body.coord.lon}`);
    } else {
        console.log('Błąd: ',body.message);
    }
});