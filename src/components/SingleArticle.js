import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Vote } from '../components/Vote';
import {
  getSingleArticle,
  getArticleComments,
  deleteComment
} from '../utils/api';
import Create from '../Forms/comment_form';

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [isPending, setisPending] = useState(true);
  const { id } = useParams();

  const { vote, incrementVote } = useState(0);

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
          <span>
            <Vote votes={singleArticle.votes} />
          </span>
        </li>
        <li className='article__comments'>
          <span>Comments:</span> {singleArticle.comment_count}
        </li>
        <li className='article__author'>
          <span>Author:</span> {singleArticle.author}
        </li>
      </ul>

      <p className='single-article__content'>{singleArticle.body}</p>

      <Expandable label={' comment '}>
        <Create setComments={setComments} />
      </Expandable>

      <ul className='comment__wrapper'>
        <h3 className='comment__title'>Comments</h3>
        {comments.map(({ body, author, comment_id }) => {
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
                <button className='comment__vote-btn' onClick={incrementVote}>
                  Vote
                </button>
                <button
                  className='comment_delete-btn'
                  onClick={() => {
                    deleteComment(comment_id);
                  }}
                >
                  Delete
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
