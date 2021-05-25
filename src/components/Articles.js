import { useEffect, useState } from 'react';
import {BrowserRouter as useParams} from 'react-router-dom'
import { getAllArticlesByTopic } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const {topicsUrl} = useParams();

  useEffect(() => {
    getAllArticlesByTopic(topicsUrl).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  },[topicsUrl]);

  return (
    <div className=' Articles'>
      <h2>All Articles</h2>
      <ul>
        {articles &&
          articles.map(({ title, votes, comment_count, author, topic }) => {
            return (
              <li key={title}>
                <h2>{title}</h2>
                <p>user: {author}</p>
                <p>
                  votes: {votes} comment count: {comment_count}
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Articles;
