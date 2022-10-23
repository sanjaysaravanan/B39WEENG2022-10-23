// // Create Obj which is capable of making an API Call
// const request = new XMLHttpRequest();

// // Open the connect to the API with HTTP method & URL
// request.open("GET", "https://restcountries.com/v3.1/all", true);

// // Send the Request to the Server 
// request.send(null);

// // login api
// // request.send({ email: 'sanjay@gmail.com', password: 'xxxxxxx' });

// // Parse the Text Passed on from the server
// request.onload = function () {
//   var response = JSON.parse(request.responseText);
//   console.log('Success', response);
// }

// request.onerror = function () {
//   console.log('Facling some try later');
// }

// fetch('https://restcountries.com/v3.1/all')
//   .then((response) => {
//     console.log(response);
//     // employ chaingin
//     return response.json(); // return the promise which contains the desired data
//   })
//   .catch((err) => {
//     console.log(err)
//   })


const API_KEY = '991f626650507e6605c2ca33f8edc191';

// default API Mehtod - GET --> READ operation
fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    console.log(response);
    // employ chaingin
    return response.json(); // return the promise which contains the desired data
  })
  .then((countries) => {
    console.log(countries)
    countries.slice(0, 5).forEach((country) => {

      const [lat, lng] = country.latlng;

      // Each Iteration with the details of the country fetch the weather details of each country
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
        .then((weatherResponse) => {
          return weatherResponse.json(); // returns a promise
        })
        .then((countryWeather) => {
          const { main: { temp, sea_level, humidity } } = countryWeather;
          console.log(`${country.name.common}(${country.flag})
            Humidity: ${humidity}
            Sea Level: ${sea_level}
            Temperature: ${temp}
          `);
        })
    });
  })
  .catch((error) => {
    console.log('Having some trouble', error);
  });















