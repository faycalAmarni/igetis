import meeting_1 from '../assets/img/meeting-1.jpg';
import meeting_2 from '../assets/img/meeting-2.jpg';
import meeting_3 from '../assets/img/meeting-3.jpg';

import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { useState } from 'react';
function Caros() {
  const [responsive, setResponsive] = useState({
    0: {
      items: 1,
    },
    450: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  });
  return (
    <div class="carousel">
      <div>
        <OwlCarousel
          class="testimonials-carousel owl-carousel"
          items={1}
          // loop={true}
          animateOut={'fadeOut'}
          animateIn={'fadeIn'}
          dots={false}
          // autoplay={true}
          nav={false}
        >
          <div class="carousel-item">
            <div class="carousel-img">
              <img src={meeting_1} alt="temp" />
            </div>

            <div class="carousel-text">
              <h1>IGETIS Web</h1>
              <p>Création de site internet dynamique et référencement</p>
              <div class="carousel-btn">
                <Link to="/Contact">
                  <a class="btn" href="">
                    <i class="fa fa-email"></i>Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* <div class="carousel-item">
            <div class="carousel-img">
              <img src={meeting_2} alt="temp" />
            </div>

            <div class="carousel-text">
              <h1>IGETIS Web 2</h1>
              <p>Création de site internet dynamique et référencement</p>
              <div class="carousel-btn">
                <Link to="/Contact">
                  <a class="btn" href="">
                    <i class="fa fa-email"></i>Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
          {/* 
          <div class="carousel-item">
            <div class="carousel-img">
              <img src={meeting_3} alt="temp" />
            </div>

            <div class="carousel-text">
              <h1>IGETIS Web 3</h1>
              <p>Création de site internet dynamique et référencement</p>
              <div class="carousel-btn">
                <Link to="/Contact">
                  <a class="btn" href="">
                    <i class="fa fa-email"></i>Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div class="carousel-item">
            <div class="carousel-img">
              <img src={meeting_1} alt="temp" />
            </div>

            <div class="carousel-text">
              <h1>IGETIS Web 4</h1>
              <p>Création de site internet dynamique et référencement</p>
              <div class="carousel-btn">
                <Link to="/Contact">
                  <a class="btn" href="">
                    <i class="fa fa-email"></i>Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Caros;
