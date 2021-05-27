import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://bex-northcoders-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getAllArticlesByTopic = async (query, sort_by, order) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: query,
      sort_by: 'created_at',
      order: 'desc'
    }
  });

  return data.articles;
};

export const getSingleArticle = async (id) => {
  const { data } = await newsApi.get(`/articles/${id}`);
  return data.article;
};

export const getArticleComments = async (id) => {
  const { data } = await newsApi.get(`/articles/${id}/comments`);
  return data.comments;
};

export const postComment = async (id, newComment) => {
  return newsApi
    .post(`/articles/${id}/comments`, newComment)
    .then((response) => {
      console.log(response.data.comment);
      return response.data.comment;
    });
};
