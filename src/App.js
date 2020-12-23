import {Switch, withRouter,  Route, BrowserRouter as Router} from "react-router-dom"
import ScrollToTop from 'react-router-scroll-top'
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Caros from "./components/Caros"
import Contact from "./components/Contact"
import About from "./components/About"
import Service from "./components/Service"
import Power from "./components/Power"
import IndexReference from "./components/IndexReference"
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
                  <Route exact path="/Service"  component={Service} />
                  <Route exact path="/Power"  component={Power} />
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
