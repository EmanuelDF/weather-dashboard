const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

app.use(cors());

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send({ error: 'City is required' });
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch weather data' });
  }
});

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});