import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as newsApi from '../utils/api';
import { getAllArticlesByTopic } from '../utils/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sort_by, setSortBy] = useState();
  const [isPending, setisPending] = useState(true);
  const { topicsUrl } = useParams();

  useEffect(() => {
    console.log(sort_by);
    getAllArticlesByTopic(topicsUrl, sort_by).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setisPending(false);
    });
  }, [topicsUrl, sort_by]);

  return (
    <div className='content'>
      <div className='content__header'>
        <h2 className='content__title'>
          {topicsUrl ? topicsUrl : 'All Articles'}
        </h2>
        <div className='content__filter-wrapper'>
          <span className='content__filter content__filter-sort'>Sort by:</span>
          <button
            className='content__filter content__filter-button'
            onClick={() => {
              setSortBy('votes');
            }}
          >
            Votes
          </button>
          <button
            className='content__filter content__filter-button'
            onClick={() => {
              setSortBy('created_at');
            }}
          >
            Date
          </button>
        </div>
      </div>

      <ul className='article__wrapper'>
        {articles &&
          articles.map(
            ({ title, votes, comment_count, author, article_id, body }) => {
              return (
                <Link to={`/article/${article_id}`}>
                  <li className='article' key={title}>
                    <h2 className='article__title'>{title}</h2>
                    <p className='article__preview'>{`${body.substr(
                      0,
                      100
                    )}...`}</p>
                    <ul className='article__meta'>
                      <li className='article__votes'>
                        <span>Votes:{votes}</span>
                      </li>
                      <li className='article__comments'>
                        <span>Comments:</span> {comment_count}
                      </li>
                      <li className='article__author'>
                        <span>Author:</span> {author}
                      </li>
                    </ul>
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
