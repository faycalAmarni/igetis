import React, {useEffect} from 'react'
import price1 from '../../assets/img/E-commerce.png';
import vitrine from  '../../assets/img/vitrine.png';
import AOS from 'aos';
const Pack = (props) => {


    useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);
  return (
      <div id="packs">
          <div style={{backgroundColor: "#405F9F"}}>

              <div class="  slider-height2">
                  <div className="section-header " data-aos="fade-up">
                    <h2 style={{color: "#F8F9FE", paddingTop: 25 }}>NOS PACKS</h2>
                    <span class="section-divider"></span>
                  </div>
              </div>

          </div>

          <section class="pricing-card-area pricing-card-area2 " >
              <div class="container">
                  <div class="row" style={{justifyContent: 'center'}} >

                      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10" data-aos="fade-up">
                          <div class="single-card text-center mb-30">
                              <div class="card-top">
                                  <h4>Pack Vitrine & Vitrine BDD</h4>
                                  <img src={vitrine} alt=""  class="col-xl-11 col-lg-11 col-md-11 col-sm-10" height="200"/>
                              </div>

                              <div class="card-bottom ">
                                  <p style={{fontStyle: 'italic', marginBottom: 30, marginTop: 30, padding: 5}}>
                                      Présentez votre entreprise et vos services à l'aide d'un outil de communication rapide à prendre en main et performant.
                                  </p>
                                  <a href="#reference" class="btn">Références</a>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-5 col-lg-5 col-md-5 col-sm-10" data-aos="fade-up">
                          <div class="single-card text-center mb-30">
                              <div class="card-top">
                                  <h4>Pack E-Commerce</h4>
                                  <img src={price1} alt="" class="col-xl-11 col-lg-11 col-md-11 col-sm-10" height="200"/>

                              </div>
                              <div class="card-bottom">
                                  <p style={{fontStyle: 'italic', marginBottom: 30, marginTop: 30, padding: 5}}>
                                    Gérez vos produits, commandes, clients, stocks et promotions depuis une seule et même interface rapide et intuitive.
                                  </p>
                                  <a href="#reference" class="btn">Références</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default Pack
