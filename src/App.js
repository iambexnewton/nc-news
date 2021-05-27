import './App.css';
import { Header } from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Create from './Forms/comment_form';
import NotFound from './components/NotFound';

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
          <Route exact path='/articles/:topicsUrl'>
            <Articles />
          </Route>
          <Route exact path='/article/:id'>
            <SingleArticle />
          </Route>
          <Route exact path='/article/:id/comments'>
            <Create />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
