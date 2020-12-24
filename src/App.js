import {Switch, withRouter,  Route, BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from 'react-router-scroll-top'
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Caros from "./components/Caros"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import Prestation from "./components/prestation/Prestation"
import Faq from "./components/faq/Faq"
import NotFoundPage from "./components/NotFoundPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                <Header />
                <Switch>
                  <Route exact path="/"  component={Home} />
                  <Route exact path="/About"  component={About} />
                  <Route exact path="/Prestation"  component={Prestation} />
                  <Route exact path="/Faq"  component={Faq} />
                  <Route exact path="/Contact"   component={Contact} />
                  <Route path="/"  component={NotFoundPage} />
                </Switch>
                <Footer/>
            </ ScrollToTop>
        </Router>

    </div>
  );
}


export default App;
