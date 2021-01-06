import meeting_1 from '../assets/img/meeting-1.jpg';
import meeting_2 from '../assets/img/meeting-2.jpg';
import meeting_3 from '../assets/img/meeting-3.jpg';

import { Link } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/css/landingsection.css';
function Caros() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section class="hero left">
      <div class="container ">
        <div class="row">
          <div class="col-md-12"></div>
        </div>

        <div class="col-md-12">
          <h1>IGETIS</h1>

          <p class="tagline">
            Création de site internet dynamique et référencement.
          </p>
          <a class="btn" href="#contact">
            <i class="fa fa-email"></i>NOUS CONTACTER
          </a>
        </div>
      </div>
    </section>
  );
}

export default Caros;
