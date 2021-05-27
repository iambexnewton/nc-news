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
    <nav className='nav'>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
      {isPending && <div>Loding...</div>}
    </nav>
  );
};

export default Nav;
