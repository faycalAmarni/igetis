import React from 'react';
import refgoogle from '../../assets/img/google1.png';
import creationSite from '../../assets/img/internet1.png';
import creationBlog from '../../assets/img/wordpress1.png';
import facebbok from '../../assets/img/facebook1.png';
import video from '../../assets/img/video.png';
import print from '../../assets/img/print.svg';
import googlead from '../../assets/img/google-ads.png';
import calendar from '../../assets/img/calendar.jpg';

import '../../styles/css/nosPrestation.css';
import service from '../../assets/img/icon/services1.svg';
const NosPrestation = (props) => {
  return (
    <section class="team-area section-padding10 ">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="text-center mt-20 mb-30">
              <h2> NOS PRESTATIONS</h2>
            </div>
          </div>
        </div>
        <div class="row NosPres container-fluid">
          <div class="col-lg-4 col-md-4 col-sm-6 ">
            <div class="single-cat" >
              <div class="cat-icon">
                <img src={refgoogle} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Référencement Google</a>
                </h5>
                <p>
                  Soyez visible sur Google moteur de recherche n°1 en France.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat">
              <div class="cat-icon">
                <img src={creationSite} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Création De Site Internet</a>
                </h5>
                <p>Bénéficiez d'un outil qui vous ressemble.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat" >
              <div class="cat-icon">
                <img src={creationBlog} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Création De Blog</a>
                </h5>
                <p>Soyez encore plus proche de vos clients.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat">
              <div class="cat-icon">
                <img src={facebbok} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Page Facebook</a>
                </h5>
                <p>Soyez encore plus proche de vos clients.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat">
              <div class="cat-icon">
                <img src={print} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Print</a>
                </h5>
                <p>Communiquez autrement que sur Internet.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="single-cat">
              <div class="cat-icon">
                <img src={googlead} alt="" />
              </div>
              <div class="cat-cap">
                <h5>
                  <a href="#">Google Adwords</a>
                </h5>
                <p>Soyez en première position sur Google.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosPrestation;
