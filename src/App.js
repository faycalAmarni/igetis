import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Caros from "./components/Caros"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import About from "./components/About"
import Service from "./components/Service"
function App() {
  return (
    <div className="App">
        <Header />
        <Caros />

        <div class="fact">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src="img/icon-4.png" alt="Icon" />
                            <h2>Qualified Team</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src="img/icon-1.png" alt="Icon" />
                            <h2>Individual Approach</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src="img/icon-8.png" alt="Icon" />
                            <h2>100% Success</h2>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="fact-item">
                            <img src="img/icon-6.png" alt="Icon" />
                            <h2>100% Satisfaction</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About />
        <Service />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
