import React, { useEffect }  from 'react';
import visibilite from '../../assets/img/icon-2.png';
import analyse from '../../assets/img/icon-3.png';
import ciblage from '../../assets/img/icon-9.png';
import AOS from 'aos';
const Puissance = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section class="ftco-section" data-aos="fade-up">
      <div class="container">
        <div
          class="section-header"
          style={{ marginTop: -40, marginBottom: 60 }}

        >
          <h2> NOTRE PUISSANCE</h2>
        </div>
        <div
          class="row"
          style={{ justifyContent: 'space-between', marginBottom: 5 }}
        >
          <div class="col-md-4 d-flex align-items-stretch ">
            <div class="services-2 text-center" >
              <div class="icon-wrap">
                <div class="number d-flex align-items-center justify-content-center">
                  <span>01</span>
                </div>
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={visibilite} alt="Icon" />
                </div>
              </div>
              <h2>Visibilité</h2>
              <p>Assuarance d'une parfaite visibilité sur le Web.</p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-stretch ">
            <div class="services-2 text-center" >
              <div class="icon-wrap">
                <div class="number d-flex align-items-center justify-content-center">
                  <span>02</span>
                </div>
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={analyse} alt="Icon" />
                </div>
              </div>
              <h2>Analyse</h2>
              <p>
                Un outil d’analyse et suivi est mis à disposition afin de
                mesurer les impact du site.
              </p>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-stretch ">
            <div class="services-2 text-center" >
              <div class="icon-wrap">
                <div class="number d-flex align-items-center justify-content-center">
                  <span>03</span>
                </div>
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={ciblage} alt="Icon" />
                </div>
              </div>
              <h2>Ciblage</h2>
              <p>
                Igetis cible les meilleurs technologies et les meilleurs cannaux
                digitaux afin dapporter un meilleur impact sur les lead.
              </p>
            </div>
          </div>
        </div>

        {/* <div class="row" style={{ marginBottom: 5, marginTop: 30 }}>
          <div class="col-md-2"></div>
          <div class="col-md-4">
            <div class="services-2 text-center">
              <div class="icon-wrap">
                <div class="number d-flex align-items-center justify-content-center">
                  <span>01</span>
                </div>
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={visibilite} alt="Icon" />
                </div>
              </div>
              <h2>Visibilité</h2>
              <p>Assuarance d'une parfaite visibilité sur le Web.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="services-2 text-center">
              <div class="icon-wrap">
                <div class="number d-flex align-items-center justify-content-center">
                  <span>02</span>
                </div>
                <div class="icon d-flex align-items-center justify-content-center">
                  <img src={analyse} alt="Icon" />
                </div>
              </div>
              <h2>Analyse</h2>
              <p>
                Un outil d’analyse et suivi est mis à disposition afin de
                mesurer les impact du site.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Puissance;
