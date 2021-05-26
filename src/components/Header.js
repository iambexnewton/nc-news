import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  //   const [header, setHeader] = useState([]);

  return (
    <Link to={`/`}>
      <header className='header'>
        <h1>nc news</h1>
      </header>
    </Link>
  );
};
