const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fbb67e0cab01405a82ac597d26c74640&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.current.temperature
    const percChance = response.body.current.percip
    const feelsLike = response.body.current.feelslike
    console.log(response.body.current.weather_descriptions[0] + `. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out.`)
})

const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWl0Y2hlbGxnb29kd2luIiwiYSI6ImNrOWtjcGZ4bzBnZmUzZXBwYWtiMXVlNjAifQ.2ifp-FJvq-wBOGXZ15hLfQ&limit=1'

request({url: geoURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})