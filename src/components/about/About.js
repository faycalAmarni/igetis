import React from 'react'
import Background from "../../assets/img/breadcumb.png"
import Apropos from "./Apropos"
import NousChoisir from "./NousChoisir"
import Puissance from "./Puissance"

const About = (props) => {
  return (

      <div  >
                  <section class="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
                    <div class="overlay"></div>
                      <div class="row  slider-text align-items-end">
                        <div class="col-md-8">
                          <h1 class="headerH1">À PROPOS DE IGETIS</h1>
                        </div>
                      </div>
                  </section>
                  <div class='mt-125'>
                      <Apropos  />
                      <Puissance />
                      <NousChoisir />
                  </div>

      </div>
  )
}

export default About
