const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    //const url = `http://api.weatherstack.com/current?access_key=b55894636ba4fd59405e655b2caaba87&query=${latitude},${longitude}&units=f`;
    const url = 'http://api.weatherstack.com/current?access_key=b55894636ba4fd59405e655b2caaba87&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to location search', undefined);
        } else if(body.location.name === null) {
            callback('Please specify the correct location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}, It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.
            Humidity currently is ${body.current.humidity}. Current visiblity is ${body.current.visibility}`)
        }
    });
}
//`${response.body.current.weather_descriptions[0]}, It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`
module.exports = forecast;