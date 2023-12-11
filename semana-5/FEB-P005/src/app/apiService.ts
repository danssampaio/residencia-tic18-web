import axios from 'axios';

const countryApi = 'https://restcountries.com/v3.1/all';


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


export const getCountryNews = async () => {
  try {
    const response = await axios.get(countryApi);
    return response.data;
  } catch (error) {
    console.error('Error fetching country news:', error);
    return [];
  }
};

export const getCampusWeather = async (latitude: number, longitude: number) => {
  try {
    const weatherResponse = await axios.get(`https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`);
    
    if (weatherResponse.data && weatherResponse.data.length > 0) {
      const woeid = weatherResponse.data[0]?.woeid;

      if (!woeid) {
        console.error('Error: WOEID not found for the location.');
        return {};
      }

      const detailedWeatherResponse = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
      return detailedWeatherResponse.data;
    } else {
      console.error('Error: Weather data not found for the location.');
      return {};
    }
  } catch (error) {
    console.error('Error fetching campus weather:', error);
    return {};
  }
};

export const getPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};
