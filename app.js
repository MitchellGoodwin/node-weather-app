const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fbb67e0cab01405a82ac597d26c74640&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.current.temperature
    const percChance = response.body.current.percip
    const feelsLike = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0] + `. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out.`)
    console.log(`There is a ${percChance} percent chance of rain.`)
})