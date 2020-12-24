import React from 'react'
import ContactHome from './ContactHome'
import Background from "../../assets/img/contact.jpg"

const Contact = (props) => {
  return (
    <div className="contact">
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
    </div>
  )
}

export default Contact
