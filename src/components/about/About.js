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
                    <div class="container">
                      <div class="row no-gutters slider-text align-items-end justify-content-center">
                        <div class="col-md-9  mb-5 text-center">
                          <h1 class="mb-0 bread">À PROPOS DE NOTRE ENTREPRISE</h1>
                        </div>
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
