const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=fbb67e0cab01405a82ac597d26c74640&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})