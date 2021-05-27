import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as newsApi from '../utils/api';
import { getAllArticlesByTopic } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sort_by, setSortBy] = useState('Title');
  const [isPending, setisPending] = useState(true);
  const { topicsUrl } = useParams();

  useEffect(() => {
    getAllArticlesByTopic(topicsUrl).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topicsUrl]);

  useEffect(() => {
    newsApi.getAllArticlesByTopic({ sort_by }).then((articles) => {
      setArticles(articles);
      setisPending(false);
    });
  }, [sort_by]);

  return (
    <div>
      <h2>All Articles</h2>
      <button On Click={() => setSortBy('Title')}>
        Title
      </button>

      <button>Date</button>
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
          )}{' '}
        {isPending && <div>Loding...</div>}
      </ul>
    </div>
  );
};

export default Articles;
