import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllArticlesByTopic } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topicsUrl } = useParams();

  useEffect(() => {
    getAllArticlesByTopic(topicsUrl).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topicsUrl]);

  return (
    <div>
      <h2>All Articles</h2>
      <ul className='article__wrapper'>
        {articles &&
          articles.map(
            ({ title, votes, comment_count, author, article_id }) => {
              return (
                <Link to={`/article/${article_id}`}>
                  <li className='article' key={title}>
                    <h2>{title}</h2>
                    <p>user: {author}</p>
                    <p>
                      votes: {votes} comment count: {comment_count}
                    </p>
                  </li>
                </Link>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default Articles;
