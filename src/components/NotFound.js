import { Link } from 'react-router-dom';
import image from '../assets/nonono.gif';
import sound from '../assets/ahahah.mp3';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry...</h2>
      <p>The page you are requesting can not be found </p>
      <p className='back'>
        <Link to='/'>Back to the homepage</Link>
      </p>
      <img src={image} alt='nonono' />
      <audio className='audio-element'>
        <source src={sound}></source>
      </audio>
    </div>
  );
};

export default NotFound;
