import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '../utils/api';

const Create = ({ setComments }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = { body, username: 'jessjelly' };
    setIsPending(true);
    postComment(id, newComment).then((commentFromApi) => {
      console.log(commentFromApi);
      setComments((currComment) => {
        return [commentFromApi, ...currComment];
      });
      setIsPending(false);

      setBody('');
      setTitle('');
    });
  };

  return (
    <div className='createComment'>
      <form onSubmit={handleSubmit}>
        <label>New comment</label>
        <input
          className='comment__input'
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Comment body</label>
        <textarea
          className='comment__input comment__textarea'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Comment author: </label>
        <select className='comment__input'>
          <option value='default'>Jessjelly</option>
        </select>
        {!isPending && <button className='comment__btn'>Submit comment</button>}
        {isPending && (
          <button className='comment__btn' disabled>
            Submitting your comment...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
