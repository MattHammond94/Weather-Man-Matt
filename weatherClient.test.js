const WeatherClient = require('./weatherClient');
const jestfetchMock = require("jest-fetch-mock");
const apiKey = require('./apiKey');
jestfetchMock.enableMocks();

describe(WeatherClient, () => {

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Calls the open weather API with a city and returns the correct weather data', (done) => {

    const client = new WeatherClient();
    
    fetch.mockResponseOnce(JSON.stringify({ 
      website: 'weather',
      description: 'Cloud',
      other: 'Rain'
    }));  //When fetch is called in our test it will return the above
    
    client.fetchWeatherData('canBeAnythingInThisCase').then((response) => {
      expect(response.website).toBe('weather');
      expect(response.description).toBe('Cloud');
      expect(response.other).toBe('Rain');
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=canBeAnythingInThisCase&appid=${apiKey}`);
      done();
    });
  });
});

// -----------------------------------------------
// The test below works as expected however the API call is not being mocked:

// const WeatherClient = require('./weatherClient');

// describe(WeatherClient, () => {
//   it('Calls the open weather API with a city and returns the correct weather data', () => {
//     const client = new WeatherClient();
    
//     client.fetchWeatherData('Beirut').then((data) => {
//       expect(data.name).toBe('Beirut');
//       expect(data.sys.country).toBe('LB');
//       expect(data.weather[0].main).toBe('Clouds'); //obviously this expectation will change dependent on the weather in Beirut.
//     });
//   });
// });

// -----------------------------------------------