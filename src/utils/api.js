import axios from 'axios';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'f8pP3ewzAjvZgEcQy8TM0CSUkD1r9BVXlisMT1S0';

export const getNasaApod = () =>
  axios
    .get(`${URL}?api_key=${API_KEY}`)
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
