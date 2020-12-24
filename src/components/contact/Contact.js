import React from 'react'
import ContactHome from './ContactHome'
import Background from "../../assets/img/contact.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Contact = (props) => {
  return (
    <div className="contact container">
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
              <div className="col-md-9  mb-5 text-center">
                <h1 className="mb-0 bread">NOUS CONTACTER</h1>
              </div>
            </div>
          </div>
        </section>
        <div class="mt-125">
            <ContactHome />
        </div>

        <OwlCarousel>
            <div class="item"><h4>1</h4></div>
            <div class="item"><h4>2</h4></div>
            <div class="item"><h4>3</h4></div>
            <div class="item"><h4>4</h4></div>
            <div class="item"><h4>5</h4></div>
            <div class="item"><h4>6</h4></div>
        </OwlCarousel>


    </div>
  )
}

export default Contact
