// const str = 'sanjay';


// console.log('Line 1');

// try { // include all the code which is prone to error
//   // console.log(str.toUpperCase()); // invalid func call
//   console.log(str.toName())
// } catch (err) {
//   console.log('Error in Execution', err);
// } finally {
//   console.log('I am finally used perform some cleaing operation');
// }
// try {
//   throw new Error('Manual Error');
// } catch (err) {
//   console.log('Error in Execution', err);
// }

// console.log('Line 3');


// // throw manual/ custom error


// fetch('https://restcountries.com/v3.1/all')
//   .then((response) => {
//     console.log(response);
//     // employ chaingin
//     return response.json(); // return the promise which contains the desired data
//   })
//   .then((countries) => {
//     console.log(countries);
//   })
//   .catch((err) => {
//     console.log(err)
//   })


const API_KEY = '991f626650507e6605c2ca33f8edc191';

// asynchronous function
const getCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all'); // promise got resolved and passed to the next line
    console.log(response);

    const countries = await response.json();
    console.log(countries);

    countries.slice(0, 5).forEach(async (country) => {
      try {
        const [lat, lng] = country.latlng;

        const wetherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`);

        const countryWeather = await wetherResponse.json();

        const { main: { temp, sea_level, humidity } } = countryWeather;
        console.log(`${country.name.common}(${country.flag})
              Humidity: ${humidity}
              Sea Level: ${sea_level}
              Temperature: ${temp}
            `);
      } catch (err) {
        console.log(err)
      }
    });
  } catch (err) {
    console.log(err)
  }

}


getCountries();



