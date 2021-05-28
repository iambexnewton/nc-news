import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Link to='/'>
      <header className='header'>
        <h1 className='header__title'>nc news</h1>
      </header>
    </Link>
  );
};
