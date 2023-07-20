const WeatherClient = require('./weatherClient');
const Weather = require('./weather');
// jest.mock('./weatherClient');

// describe(Weather, () => {

//   beforeEach(() => {
//     WeatherClient.mockClear();
//   });

//   it('Should store and return the correct data for Bournemouth', async () => {
//     const mockedWeatherClient = new WeatherClient();

//     mockedWeatherClient.fetchWeatherData.mockImplementation(() => 'Bournemouth')
    
//     // .MockResolvedValueOnce({
//     //   name: 'Bournemouth',
//     //   type: 'Cloudy'
//     // });
  
//     const weather = new Weather(mockedWeatherClient);
    
//     await weather.load('Bournemouth');
//     expect(weather.getWeatherData()).toBe('Bournemouth');
//   });
// });

describe(Weather, () => {
  it('Should store and return the correct data for Bournemouth', (done) => {
    
    const mockWeatherClient = {
      fetchWeatherData: jest.fn()
    };

    mockWeatherClient.fetchWeatherData.mockResolvedValueOnce({
      name: 'Bournemouth',
      sys: ['England'],
      description: 'Cloudy'
    });

   const weather = new Weather(mockWeatherClient);
    weather.load('Bournemouth').then(() => {
      expect(mockWeatherClient.fetchWeatherData).toHaveBeenCalledWith('Bournemouth');
      expect(weather.getWeatherData().name).toBe('Bournemouth');
      expect(weather.getWeatherData().sys[0]).toBe('England');
      expect(weather.getWeatherData().description).toBe('Cloudy');
      done();
    });
  });

  it('Should return a formatted list when displayWeather is called', (done) => {
    
    const mockWeatherClient2 = {
      fetchWeatherData: jest.fn()
    };

    mockWeatherClient2.fetchWeatherData.mockResolvedValueOnce({
      name: 'London',
      weather: [ 
        { 
          main: 'Rain',
          description: 'Rainy'
        } 
      ],
      main: {
        temp: '15',
        feels_like: '10',
        humidity: '10'
      }
    });

   const weather = new Weather(mockWeatherClient2);
    weather.displayWeather('London').then(() => {
      // expect(mockWeatherClient2.fetchWeatherData).toHaveBeenCalledWith('London');
      expect(mockWeatherClient2.fetchWeatherData).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith(`City:  London\nWeather:  Rain\nTemperature:  15\nFeels like:  10\nHumidity:  10%`);
      done();
    });
  });
});
