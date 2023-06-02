const WeatherClient = require('./weatherClient');
const Weather = require('./weather');
// jest.mock('./weatherClient');


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

  it('Should return a formatted list when displayWeather is called', () => {
    
  });
});
