import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://bex-nc-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getTopicArticles = async (articles) => {
  console.log('******');

  const { data } = await newsApi.get('/articles');

  return data.articles;
};
