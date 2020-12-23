import React from 'react'
import PropTypes from 'prop-types'

class AboutHome extends React.Component {
  render () {
      return (
        <div className="container  about" >
          <div >

            <div >
              <div className="section-header">
                <h2>À PROPOS DE IGETIS</h2>
              </div>
              <div className="about-text ">
                <p>
                  L’effectif de notre société grandit de jour en jour afin de vous proposer toujours plus de possibilités et de rester à l’écoute de vos attentes. La société IGETIS compte à ce jour un grand nombre de clients qui n’ont pas hésité à nous faire confiance pour la création de leur projet.
                </p>
                <p>
                  Soucieux de l’image de votre entreprise, notre agence met à votre disposition nos compétences pour vous offrir des solutions innovantes, adaptées à votre image et votre besoin. Nous vous accompagnons tout au long de votre projet et vous proposons de booster votre activité sur les différents médias.
                </p>
                <a className="btn" href>Learn More</a>
              </div>
            </div>
          </div>

<div className="feature">
  <div className="container">
    <div className="row align-items-end">
      <div className="col-md-6">
        <div className="feature-img">
          <img src="img/office1.jpg" alt="Image" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="section-header">
          <h2>
            Pourquoi Nous Choisir ?
          </h2>
        </div>
        <p>
          Nous tenons à dynamiser votre présence sur Internet ainsi que dans les moteurs de recherches. Nous vous proposons pour cela différentes prestations qui vous permettront de bénéficier d’une bonne notoriété auprès de vos clients et prospects.
        </p>
        <div className="row counters">
          <div className="col-6">
            <i className="fa fa-user" />
            <div className="counters-text">
              <h2 data-toggle="counter-up">100</h2>
              <p>
                  Notre Personnel
              </p>
            </div>
          </div>
          <div className="col-6">
            <i className="fa fa-users" />
            <div className="counters-text">
              <h2 data-toggle="counter-up">200</h2>
              <p>
                Nos Clients
              </p>
            </div>
          </div>
          <div className="col-6">
            <i className="fa fa-check" />
            <div className="counters-text">
              <h2 data-toggle="counter-up">300</h2>
              <p>
                Projets Achevés
              </p>
            </div>
          </div>
          <div className="col-6">
            <i className="fa fa-running" />
            <div className="counters-text">
              <h2 data-toggle="counter-up">400</h2>
              <p>
                  Projets en Cours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      )
  }
}

export default AboutHome;
