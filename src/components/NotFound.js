import { Link } from 'react-router-dom';
import image from '../assets/nonono.gif';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>The page you are requesting can not be found </p>

      <img src={image} alt='nonono' />
      <Link to='/'>Back to the homepage</Link>
    </div>
  );
};

export default NotFound;
