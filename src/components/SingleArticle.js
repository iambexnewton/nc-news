import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useVote } from '../hooks/useVote';
import { getSingleArticle, getArticleComments } from '../utils/api';
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
    <>
      <div>
        {isPending && <div>Loding...</div>}
        <ul>
          <li className='singleArticles'>
            <h2>{singleArticle.title}</h2>
            <p>{singleArticle.body}</p>
            <p> user :{singleArticle.author}</p>
            <p>
              votes: {singleArticle.votes}
              comment_count:
              {singleArticle.comment_count}
            </p>

            <button onClick={() => incrementVote()}>ADD VOTE</button>

            <Expandable label={'Make a comment '}>
              <Create setComments={setComments} />
            </Expandable>

            {/* <Expandable label={'Comments'}> */}
            <ul>
              {comments.map(({ body, author }) => {
                return (
                  <p>
                    {body}{' '}
                    <p>
                      {' '}
                      {author} votes = {vote}
                    </p>
                    <button onClick={() => incrementVote()}>ADD VOTE</button>
                  </p>
                );
              })}
            </ul>
            {/* </Expandable> */}
          </li>
        </ul>
      </div>
    </>
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
        {isOpen ? `Close ${label}` : `Open ${label}`}{' '}
      </button>
      {isOpen && children}
    </>
  );
}

export default SingleArticle;
