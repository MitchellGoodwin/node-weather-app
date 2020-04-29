const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=fbb67e0cab01405a82ac597d26c74640&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '.4233&units=f'


    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, {
                temp: response.body.current.temperature,
                feelsLike: response.body.current.feelslike,
                forecast: 'The temperature is ' + response.body.current.temperature + ' degrees. It feels like ' + response.body.current.feelslike + ' degrees out.'
            })
        }
})
}

module.exports = forecast