const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

forecast(42.3605, -71.0596, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})