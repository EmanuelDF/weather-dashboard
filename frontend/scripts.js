document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      displayWeather(data);
    }
  } catch (error) {
    alert('Failed to fetch weather data');
  }
});

function displayWeather(data) {
  const weatherDetails = document.getElementById('weatherDetails');
  weatherDetails.innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}