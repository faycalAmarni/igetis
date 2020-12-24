import React from 'react'
import Background from "../../assets/img/carousel-3.jpg"
import NosPrestation from "./NosPrestation"

const Prestation = (props) => {
  return (

    <div class="service ">
            <section class="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
              <div class="overlay"></div>
              <div class="container">
                <div class="row no-gutters slider-text align-items-end justify-content-center">
                  <div class="col-md-9  mb-5 text-center">
                    <h1 class="mb-0 bread">NOS SOLUTIONS</h1>
                  </div>
                </div>
              </div>
            </section>
            <div class="mt-125">
                <NosPrestation />
            </div>
          </div>
  )
}

export default Prestation
