const express = require('express')
const cors = require('cors')
const config = require('./config/config')
const OpenWeatherApiController = require('./controllers/OpenWeatherApiController')

const app = express()

app.use(cors())


app.get('/getWeather', OpenWeatherApiController.getCurrentWeather)

app.listen(config.port)
console.log(`App started on port ${config.port}`)
