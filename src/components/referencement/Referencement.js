import React from 'react';
import one from '../../assets/img/reference/1.jpg';
import two from '../../assets/img/reference/2.jpg';
import three from '../../assets/img/reference/3.jpg';
import four from '../../assets/img/reference/4.jpg';
import five from '../../assets/img/reference/5.jpg';
import six from '../../assets/img/reference/6.jpg';
import seven from '../../assets/img/reference/7.jpg';
import eight from '../../assets/img/reference/8.jpg';
import '../../styles/css/referencement.css';
const Referencement = () => {
  return (
    <section class="">
      <div className="section-header">
        <h2>NOS REFERENCES</h2>
      </div>
      <div >
        <div class="row">
                <div class="single_gallery_item col-md-3 ">
                    <img src={one} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={two} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={three} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={four} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
        </div>
        <div class="row">
                <div class="single_gallery_item col-md-3 ">
                    <img src={five} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={six} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={seven} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
                <div class="single_gallery_item col-md-3 ">
                    <img src={eight} alt="" />
                    <div class="gallery-hover-overlay d-flex align-items-center justify-content-center">
                        <div class="port-hover-text text-center">
                            <h4>DFR Corp. Branding</h4>
                            <a href="#">Brand Identity</a>
                        </div>
                    </div>
                </div>
        </div>

      </div>
    </section>
  );
};

export default Referencement;
