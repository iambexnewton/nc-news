import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='nc news'>
        <Nav />
        <Route exact path='/'></Route>
      </div>
    </Router>
  );
}

export default App;
