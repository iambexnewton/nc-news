import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('******');
    const newComment = { title, body };
    setIsPending(true);

    axios
      .post(`/api/article/${id}/comments`, newComment)
      .then((response) => ({ articleId: response.data.id }));
    console.log('new comment added');
    setIsPending(false);
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
