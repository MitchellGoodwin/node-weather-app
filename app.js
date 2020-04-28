const request = require('request')

const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=fbb67e0cab01405a82ac597d26c74640&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const temp = response.body.current.temperature
//         const feelsLike = response.body.current.feelslike
//         console.log(response.body.current.weather_descriptions[0] + `. It is currently ${temp} degrees out. It feels like ${feelsLike} degrees out.`)
//     }
// })

// const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWl0Y2hlbGxnb29kd2luIiwiYSI6ImNrOWtjcGZ4bzBnZmUzZXBwYWtiMXVlNjAifQ.2ifp-FJvq-wBOGXZ15hLfQ&limit=1'

// request({url: geoURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})