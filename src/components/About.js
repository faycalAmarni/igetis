import React from 'react'
import PropTypes from 'prop-types'
class About extends React.Component {
  render () {
    return(

      <div className="about" style={{marginTop: 45}}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="about-img">
                      <div className="about-img-1">
                        <img src="../img/office1.jpg" alt="Image" />
                      </div>

                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section-header">
                      <h2>À PROPOS DE IGETIS</h2>
                    </div>
                    <div className="about-text">
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
              </div>
      </div>

    )
  }
}

export default About;
