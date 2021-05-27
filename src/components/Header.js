import { useState } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../assets/home.svg';

export const Header = () => {
  //   const [header, setHeader] = useState([]);

  return (
    <Link to='/'>
      <header className='header'>
        <h1 className='header__title'>nc news</h1>
      </header>
    </Link>
  );
};
