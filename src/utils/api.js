import axios from 'axios';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'f8pP3ewzAjvZgEcQy8TM0CSUkD1r9BVXlisMT1S0';

export const getNasaApod = async () => {
  try {
    let data = {};
    await axios
      .get(`${URL}?api_key=${API_KEY}`)
      .then(response => {
        data = response.data;
      })
      .catch(err => {
        console.log(err);
      });
    return data;
  } catch (e) {
    console.log(e);
  }
};
