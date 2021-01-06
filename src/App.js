import {
  Switch,
  withRouter,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import Home from './components/Home';
import Caros from './components/Caros';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Prestation from './components/prestation/Prestation';
import Faq from './components/faq/Faq';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Legale from "./components/Legale"
import GoTop from 'components/statics/GoTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Prestation" component={Prestation} />
            <Route exact path="/Faq" component={Faq} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Legale" component={Legale} />
            <Redirect to="/" />
          </Switch>
          <Footer />
          <GoTop />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
