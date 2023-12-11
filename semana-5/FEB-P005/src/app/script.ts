import $ from 'jquery';
import { getCountryNews, getCampusWeather, getPosts, getUsers} from './apiService';

const fillNews = async () => {
  try {
    const news = await getCountryNews();
    const newsContainer = $('#news-container');

    news.forEach((item: any) => {
      const newsItem = $('<div class="news-item"></div>');
      const title = $(`<h3>${item.title}</h3>`);
      const description = $(`<p>${item.description}</p>`);
      newsItem.append(title, description);
      newsContainer.append(newsItem);
    });
  } catch (error) {
    console.error('Error filling news:', error);
  }
};

const fillWeather = async () => {
  try {
      const weather = await getCampusWeather( -14.7980073, -39.1763752);

      if (weather && weather.consolidated_weather && weather.consolidated_weather.length > 0) {
          const todayWeather = weather.consolidated_weather[0];

          $('#temperature').text(`Temperature: ${todayWeather.the_temp.toFixed(2)}°C`);
          $('#conditions').text(`Conditions: ${todayWeather.weather_state_name}`);
      } else {
          $('#temperature').text('Erro ao obter previsão do tempo');
      }
  } catch (error) {
      console.error('Error filling weather:', error);
  }
};

const fillResults = async () => {
  try {
    const posts = await getPosts();
    const users = await getUsers();

    const resultsContainer = $('.resultados-int');

    posts.forEach((post: any) => {
      const resultItem = $(`<div class="result-item"></div>`);
      const title = $(`<h3>${post.title}</h3>`);
      const body = $(`<p>${post.body}</p>`);
      resultItem.append(title, body);
      resultsContainer.append(resultItem);
    });

    users.forEach((user: any) => {
      const resultItem = $(`<div class="result-item"></div>`);
      const name = $(`<h3>${user.name}</h3>`);
      const email = $(`<p>${user.email}</p>`);
      resultItem.append(name, email);
      resultsContainer.append(resultItem);
    });
  } catch (error) {
    console.error('Error filling results:', error);
  }
};

$(document).ready(() => {
});
