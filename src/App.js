import { Header } from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import Create from './Forms/comment_form';
import NotFound from './components/NotFound';

import './reset.css';
import './App.css';

function App() {
  return (
    <Router>
      <main className='nc news'>
        <div className='header__wrapper'>
          <Header />
          <Nav />
        </div>

        <section className='content__wrapper'>
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
        </section>
      </main>
    </Router>
  );
}

export default App;
