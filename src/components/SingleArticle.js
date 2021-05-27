import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useVote } from '../hooks/useVote';
import { getSingleArticle, getArticleComments, patchVote } from '../utils/api';
import Create from '../Forms/comment_form';

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isPending, setisPending] = useState(true);
  const { id } = useParams();

  const { vote, setVote, incrementVote } = useVote(0);

  useEffect(() => {
    getSingleArticle(id).then((articleFromApi) => {
      setSingleArticle(articleFromApi);
      getArticleComments(id).then((commentsFromApi) => {
        setComments(commentsFromApi);
      });
      setisPending(false);
    });
  }, [id]);

  return (
    <article className='single-article'>
      {isPending && <div>Loding...</div>}

      <h2 className='content__title'>{singleArticle.title}</h2>

      <ul className='article__meta'>
        <li className='article__votes'>
          <span>Votes:</span> {singleArticle.votes}
        </li>
        <li className='article__comments'>
          <span>Comments:</span> {singleArticle.comment_count}
        </li>
        <li className='article__author'>
          <span>Author:</span> {singleArticle.author}
        </li>
      </ul>

      <p className='single-article__content'>{singleArticle.body}</p>

      <button onClick={() => incrementVote()}>vote</button>

      <Expandable label={' comment '}>
        <Create setComments={setComments} />
      </Expandable>

      <ul className='comment__wrapper'>
        <h3 className='comment__title'>Comments</h3>
        {comments.map(({ body, author }) => {
          return (
            <li className='comment'>
              <p className='comment__content'>{body}</p>

              <ul className='article__meta'>
                <li className='article__votes'>
                  <span>Votes:</span> {vote}
                </li>
                <li className='article__author'>
                  <span>Author:</span> {author}
                </li>
                <button
                  className='comment__vote-btn'
                  onClick={() => incrementVote()}
                >
                  Vote
                </button>
              </ul>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

function Expandable({ children, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((currIsOpen) => {
      return !currIsOpen;
    });
  };

  return (
    <>
      <button onClick={toggleIsOpen}>
        {isOpen ? `Close ` : ` Leave a ${label}`}{' '}
      </button>
      {isOpen && children}
    </>
  );
}

export default SingleArticle;
