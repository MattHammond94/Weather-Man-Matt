const apiKey = require('./apiKey');

class WeatherClient { 

  async fetchWeatherData(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((weatherData) => {
     return weatherData
    });
  }
}

module.exports = WeatherClient;

// client1 = new WeatherClient();
// client1.fetchWeatherData('Bournemouth').then ((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(weatherData);
// });

// client2 = new WeatherClient();
// client2.fetchWeatherData('Bristol').then ((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.table(weatherData.weather);
// });

// client3 = new WeatherClient();
// client3.fetchWeatherData('Beirut').then ((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(weatherData.weather[0].main);
// });