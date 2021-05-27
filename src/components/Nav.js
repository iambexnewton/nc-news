import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = () => {
  const [topics, setTopics] = useState([]);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
      setisPending(false);
    });
  }, []);

  return (
    <ul className='nav'>
      <Link to={`/`}>
        <li className='nav__item'>Home</li>
      </Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            <li className='nav__item'>{topic.slug}</li>
          </Link>
        );
      })}
      {isPending && <div>Loding...</div>}
    </ul>
  );
};

export default Nav;
