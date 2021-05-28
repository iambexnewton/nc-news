import axios from 'axios';

export const newsApi = axios.create({
  baseURL: 'https://bex-northcoders-news.herokuapp.com/api'
});

export const getTopics = async () => {
  const { data } = await newsApi.get('/topics');
  return data.topics;
};

export const getAllArticlesByTopic = async (query, sort_by) => {
  const { data } = await newsApi.get('/articles', {
    params: {
      topic: query,
      sort_by: sort_by
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

export const patchVote = async (id, vote) => {
  return newsApi
    .patch(`/articles/${id}`, { inc_votes: vote })
    .then((response) => {
      return response.data.vote;
    });
};

export const deleteComment = async (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((response) => {
    return !response.data.comment_id;
  });
};
