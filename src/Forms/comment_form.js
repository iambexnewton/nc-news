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
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Comment body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label> Comment author: </label>
        <select>
          <option value='default'> jessjelly </option>
        </select>
        {!isPending && <button>SUBMIT COMMENT</button>}
        {isPending && <button disabled>SUBMITING YOUR COMMENT...</button>}
        <p>{title}</p>
        <p>{body}</p>
      </form>
    </div>
  );
};

export default Create;
