import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://bex-northcoders-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};



export const getAllArticlesByTopic = async (query) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: query,
    }
  });
  return data.articles;
};


//Monday jobs

//need to get the articles to display that are relevent to the topic and then get them to sort by.

