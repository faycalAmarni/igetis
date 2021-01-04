import React from 'react'
import ContactHome from './ContactHome'
import Background from "../../assets/img/breadcumb.png"

const Contact = (props) => {
  return (
    <div className="contact">
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>

            <div className="row no-gutters slider-text align-items-end ">
              <div className="col-md-8">
                <h1 className="headerH1">NOUS CONTACTER</h1>
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
