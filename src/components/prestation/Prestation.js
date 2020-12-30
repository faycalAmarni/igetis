import React, { useEffect } from 'react';
import Background from '../../assets/img/carousel-3.jpg';
import NosPrestation from './NosPrestation';
import '../../styles/css/prestation.css';
import AOS from 'aos';
import googleColor from '../../assets/img/googleColor.png';
import wordpressColor from '../../assets/img/wordpressColor.png';
import paypalColor from '../../assets/img/paypalColor.png';
import prestashopColor from '../../assets/img/prestashopColor.png';
import adobeColor from '../../assets/img/adobeColor.png';
import latex from '../../assets/img/Latex.png';
import Apropos from 'components/about/Apropos';
const Prestation = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="service ">
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(${Background})`,
          marginTop: 0,
          marginBottom: 0,
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9  mb-5 text-center">
              <h1 className="mb-0 bread">NOS SOLUTIONS</h1>
            </div>
          </div>
        </div>
      </section>

      {/* new creation referencenement section */}

      <section
        id="advanced-features"
        style={{
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <div className="features-row section-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div data-aos="fade-right" className="aos-init">
                  <h2>
                    Nous créons des sites vitrine modernes, flexibles et clés en
                    main
                  </h2>
                  <h3>
                    Notre cœur de métier est la réalisation de sites Internet
                    vitrine et e-commerce.
                  </h3>
                  <p data-aos="fade-right" className="aos-init">
                    Nous imaginons le site qui répondra à votre identité puisque
                    chaque entreprise a ses besoins et ses attentes. Vos
                    demandes étant uniques, notre objectif est de contribuer à
                    la création de votre site en respectant ainsi vos exigences.
                  </p>

                  <a data-aos="fade-right" className="btn" href>
                    Création de site internet
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div data-aos="fade-left" className="aos-init">
                  <h2>RÉFÉRENCEMENT LOCAL</h2>
                  <h3>
                    Notre cœur de métier est la réalisation de sites Internet
                    vitrine et e-commerce.
                  </h3>

                  <p data-aos="fade-left" className="aos-init">
                    Nous proposons à votre entreprise une visibilité maximale en
                    fonction des tendances de Google en matière de
                    positionnement. Un référencement SEO local ou national selon
                    vos besoins.
                  </p>

                  <a data-aos="fade-left" className="btn" href>
                    Référencement Naturel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="prestation-asociaciones-wrapper">
        <div className="prestation-asociaciones-row">
          <div className="prestation-asociaciones-column">
            <img src={googleColor} alt="" />
            <div className="prestation-asociaciones-title"></div>
          </div>
          <div className="prestation-asociaciones-column">
            <img src={wordpressColor} alt="" />
          </div>
          <div className="prestation-asociaciones-column">
            <img src={prestashopColor} alt="" />
          </div>
          <div className="prestation-asociaciones-column">
            <img src={paypalColor} alt="" />
          </div>
          <div className="prestation-asociaciones-column">
            <img src={adobeColor} alt="" />
          </div>
          <div className="prestation-asociaciones-column">
            <img src={latex} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-0">
        <NosPrestation />
      </div>
      <div className="mt-30">
        <Apropos />
      </div>
    </div>
  );
};

export default Prestation;
