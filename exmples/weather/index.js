const weatherUrl =  "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "5b2e7abcace088ef05fea9afddc76b8c";

const getWeather = async () => {
  const weatherArea = document.getElementById("weather-area");

  try {
    const cityName = document.getElementById("text-inp").value;
    const response = await fetch(`${weatherUrl}?q=${cityName}&appid=${apiKey}`);
    const data = await response.json();

    const main = data.main;

    const divElement = document.createElement('div');
    divElement.classList.add('weather-div');

    divElement.innerText = `Humidity - ${main.humidity}
      Temp Min - ${main.temp_min}
      Temp Max - ${main.temp_max}
      Feels Like - ${main.feels_like}
    `
    if (main.temp < 300 ) {
      divElement.classList.add('bg-success');
    } else if (main.temp >= 300 && main.temp < 310) {
      divElement.classList.add('bg-warning');
    } else divElement.classList.add('bg-danger');

    weatherArea.innerHTML = "";

    weatherArea.append(divElement);
  } catch (err) {
    spanElement.innerText = "Something Went Wrong";
    spanElement.classList.add('bg-danger');
    weatherArea.append(spanElement);
  }
}

// Immediately Invoked Functions Expression
(function () {
  console.log("I am IIFE")
})();
