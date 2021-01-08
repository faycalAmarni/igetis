import meeting_1 from '../assets/img/meeting-1.jpg';
import meeting_2 from '../assets/img/meeting-2.jpg';
import meeting_3 from '../assets/img/meeting-3.jpg';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { useState, useEffect } from 'react';
import "../styles/css/landing.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

function Caros() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
      <div class="hero car">
          <div class="car-text">
            <h1 >IGETIS</h1>
            <p>Création de site internet dynamique et référencement</p>
            <div class="car-btn" data-aos="fade-up">
                <a class="btn" href="#contact" >
                  <i class="fa fa-email"></i>NOUS CONTACTER
                </a>
            </div>
          </div>
      </div>
  );
}

export default Caros;
