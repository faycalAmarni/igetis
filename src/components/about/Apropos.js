import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/apropos.css';
const Apropos = (props) => {
  return (
    <section className="appropos_section">
      <div className="container">
        <div class="about">
          <div className="section-header appropos_header">
            <h2>À PROPOS DE IGETIS</h2>
            <span class="section-divider"></span>
            <hr />
            <h4>
              Agence de communication spécialisée dans la création de site
              internet
            </h4>
          </div>
          <div className="about-text apropos_content">
            <p style={{ alignItems: 'center' }}>
              L’effectif de notre société grandit de jour en jour afin de vous
              proposer toujours plus de possibilités et de rester à l’écoute de
              vos attentes. La société IGETIS compte à ce jour un grand nombre
              de clients qui n’ont pas hésité à nous faire confiance pour la
              création de leur projet.
            </p>
            <p>
              Soucieux de l’image de votre entreprise, notre agence met à votre
              disposition nos compétences pour vous offrir des solutions
              innovantes, adaptées à votre image et votre besoin. Nous vous
              accompagnons tout au long de votre projet et vous proposons de
              booster votre activité sur les différents médias.
            </p>
            <div className="text-center">
              <Link to="/About">
                <a className="btn" href>
                  À PROPOS
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
