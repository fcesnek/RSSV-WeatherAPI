const axios = require("axios")
const config = require("../config/config")

module.exports = {
  async getCurrentWeather(req, res) {
    try {
      let city = req.query.city || 'Osijek'
      let format = req.query.format || 'metric'

      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${format}&appid=${config.api_key}`

      const apiResponse = (await axios.get(url)).data

      let response = {
        location: apiResponse.name,
        temperature: apiResponse.main.temp,
        pressure: apiResponse.main.pressure,
        windSpeed: apiResponse.wind.speed,
        weatherDesc: apiResponse.weather[0].main
      }
let strResponse = `!${response.location},${response.temperature},${response.windSpeed},${response.weatherDesc}`
      res.status(200).send(strResponse)
    } catch (err) {
      res.status(500).send({
        error: `Error while fetching data from Azure API.`
      })
    }
  }
}
