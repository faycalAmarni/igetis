import {
  Switch,
  withRouter,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from './components/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Prestation from './components/prestation/Prestation';
import Faq from './components/faq/Faq';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Legale from './components/Legale';
import ScrollToTop from 'react-router-scroll-top';
import GoTop from 'components/statics/GoTop';
import { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '65vh',
  },
  fallback: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  progress: {
    margin: 'auto',
  },
}));
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function CircularIndeterminate() {
  const classes = useStyles();
  return (
    <div className={classes.fallback}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Suspense fallback={<CircularIndeterminate />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Prestation" component={Prestation} />
              <Route exact path="/Faq" component={Faq} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Legale" component={Legale} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <Footer />
          {/* component to go to the top of the page */}
          <GoTop />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
