const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location) {
    geocode(location, (error, { latitude, location, longitude } = {}) => {
        if (error) {
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData.forecast)
        })
    })

} else {
    console.log('Enter a real location')
}

