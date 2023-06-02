const WeatherClient = require('./weatherClient');

class Weather {

  constructor(client) {
    this.client = client;
    this.weatherObj = {}
  }

  load(city) { 
    return this.client.fetchWeatherData(city)
    .then((data) => this.weatherObj = data)
  }

  getWeatherData() {
    return this.weatherObj
  }
}

module.exports = Weather;

// const client = new WeatherClient();
// const weather = new Weather(client);
// weather.load('Beirut');

// const showResult = () => {
//   console.log(weather.getWeatherData().weather[0].main);
// }

// setTimeout(showResult, 3000);
