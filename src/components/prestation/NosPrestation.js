import React from 'react';
import refgoogle from '../../assets/img/google.png';
import creationSite from '../../assets/img/internet.png';
import creationBlog from '../../assets/img/wordpress.png';
import facebbok from '../../assets/img/facebook.png';
import video from '../../assets/img/video.png';
import print from '../../assets/img/print.png';
import googlead from '../../assets/img/googlead.PNG';
import calendar from '../../assets/img/calendar.jpg';

const NosPrestation = (props) => {
  return (
    <div class="container  service">
      <div class="section-header">
        <h2> NOS PRESTATIONS</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={refgoogle} alt="Icon" />
            <h3>RÉFÉRENCEMENT GOOGLE</h3>
            <p>Soyez visible sur Google moteur de recherche n°1 en France</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={creationSite} alt="Icon" />
            <h3>CRÉATION DE SITE INTERNET</h3>
            <p>Bénéficiez d'un outil qui vous ressemble</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={creationBlog} alt="Icon" />
            <h3>CRÉATION DE BLOG</h3>
            <p>Soyez encore plus proche de vos clients</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={facebbok} alt="Icon" />
            <h3>PAGE FACEBOOK</h3>
            <p>Soyez encore plus proche de vos clients</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={video} alt="Icon" />
            <h3>VIDÉOS D'ENTREPRISE</h3>
            <p>Attirez vos futurs clients avec une vidéo</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={print} alt="Icon" />
            <h3>PRINT</h3>
            <p>Communiquez autrement que sur Internet</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={googlead} alt="Icon" />
            <h3>GOOGLE ADWORDS</h3>
            <p>Soyez en première position sur Google</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="service-item">
            <img src={calendar} alt="Icon" />
            <h3>MEOCALENDAR</h3>
            <p>Permettez à vos clients de prendre rendez-vous chez vous</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NosPrestation;
