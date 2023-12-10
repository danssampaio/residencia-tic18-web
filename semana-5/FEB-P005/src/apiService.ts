import axios from 'axios';

const countryApi = 'https://restcountries.com/v3.1/all';
const weatherApi = 'https://api.openweathermap.org/data/2.5/weather';

export const getCountryNews = async () => {
  try {
    const response = await axios.get(countryApi);
    return response.data;
  } catch (error) {
    console.error('Error fetching country news:', error);
    return [];
  }
};

export const getCampusWeather = async () => {
  try {
    const response = await axios.get(weatherApi, {
      params: {
        q: 'your_campus_location',
        appid: 'your_openweathermap_api_key',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching campus weather:', error);
    return {};
  }
};
