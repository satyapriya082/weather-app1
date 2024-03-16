function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

function displayWeather(weatherData) {
    const weatherInfoDiv = document.getElementById("weatherInfo");

    if (weatherData.cod != "404") {
        const weatherDescription = weatherData.weather[0].description;
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const pressure = weatherData.main.pressure;

        weatherInfoDiv.innerHTML = `
            <p>Weather: ${weatherDescription}</p>
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Pressure: ${pressure} hPa</p>
        `;
    } else {
        weatherInfoDiv.innerHTML = "City not found. Please check the city name.";
    }
}
