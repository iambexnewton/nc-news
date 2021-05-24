import './App.css';
import { Header } from './components/Header';
import Nav from './components/Nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './components/Articles';

function App() {
  return (
    <Router>
      <div className='nc news'>
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Articles />
          </Route>
          <Route exact path='/topic/:urlTopic'></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
