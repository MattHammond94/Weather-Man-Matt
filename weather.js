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

  

  displayWeather(city) {
   return this.client.fetchWeatherData(city)
   .then((data) => console.log(`City:  ${data.name}\nWeather:  ${data.weather[0].main}\nTemperature:  ${data.main.temp}\nFeels like:  ${data.main.feels_like}\nHumidity:  ${data.main.humidity}%`));
  }
}

module.exports = Weather;

// const client = new WeatherClient();
// const weather = new Weather(client);
// weather.load('Beirut');
// weather.displayWeather('Jerusalem');

// const showResult = () => {
//   console.log(weather.getWeatherData());
// }

// setTimeout(showResult, 3000);
