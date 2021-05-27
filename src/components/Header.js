import { useState } from 'react';
import { Link } from 'react-router-dom';
import { home } from '../assets/home.svg';

export const Header = () => {
  //   const [header, setHeader] = useState([]);

  return (
    <Link to={`/`}>
      <Link to='/'>
        {' '}
        <svg
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z' />
        </svg>{' '}
        <alt> home</alt>{' '}
      </Link>
      <header className='header'>
        <h1>nc news</h1>
      </header>
    </Link>
  );
};
