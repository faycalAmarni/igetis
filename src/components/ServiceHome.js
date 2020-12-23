import React from 'react'
import PropTypes from 'prop-types'

class ServiceHome extends React.Component {
  render () {
      return(
        <div class="container  service">
            <div class="section-header">
                <h2> NOS PRESTATIONS</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="img/google.png" alt="Icon" />
                        <h3>RÉFÉRENCEMENT GOOGLE</h3>
                        <p>
                            Soyez visible sur Google moteur de recherche n°1 en France
                        </p>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../img/internet.png" alt="Icon" />
                        <h3>CRÉATION DE SITE INTERNET</h3>
                        <p>
                            Bénéficiez d'un outil qui vous ressemble
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../img/wordpress.png" alt="Icon" />
                        <h3>CRÉATION DE BLOG</h3>
                        <p>
                            Soyez encore plus proche de vos clients
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../img/facebook.png" alt="Icon" />
                        <h3>PAGE FACEBOOK</h3>
                        <p>
                            Soyez encore plus proche de vos clients
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../img/video.png" alt="Icon" />
                        <h3>VIDÉOS D'ENTREPRISE</h3>
                        <p>
                            Attirez vos futurs clients avec une vidéo
                        </p>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="../img/print.png" alt="Icon" />
                        <h3>PRINT</h3>
                        <p>
                            Communiquez autrement que sur Internet
                        </p>

                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="img/googlead.png" alt="Icon" />
                        <h3>GOOGLE ADWORDS</h3>
                        <p>
                            Soyez en première position sur Google
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-item">
                        <img src="img/calendar.jpg" alt="Icon" />
                        <h3>MEOCALENDAR</h3>
                        <p>
                            Permettez à vos clients de prendre rendez-vous chez vous
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

export default ServiceHome;
