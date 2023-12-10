import $ from 'jquery';
import { getCountryNews, getCampusWeather} from '../apiService';

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
    const weather = await getCampusWeather();
    const weatherContainer = $('#weather-container');

    // Lógica para processar os dados da previsão do tempo

    const temperature = $(`<p>Temperature: ${weather.temperature}</p>`);
    const conditions = $(`<p>Conditions: ${weather.conditions}</p>`);
    weatherContainer.append(temperature, conditions);
  } catch (error) {
    console.error('Error filling weather:', error);
  }
};

$(document).ready(() => {
  fillNews();
  fillWeather();
});
