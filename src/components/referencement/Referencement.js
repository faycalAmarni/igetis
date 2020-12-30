import React from 'react';
import latest from '../../assets/img/latest-1.png';
// import '../../styles/css/referencement.css';
const Referencement = () => {
  return (
    <div class="blog container-fluid mb-30">
      {/* <div class="container"> */}
      <div class="section-header">
        {/* <p>Référencement</p> */}
        <h2>Référencement</h2>
      </div>
      <div class="blog-carousel row">
        <div class="blog-item col-lg-4">
          <div class="blog-img">
            <img src={latest} alt="Blog" />
          </div>
          <div class="blog-content">
            <h2 class="blog-title">Dashboards</h2>
            <div class="blog-meta">
              <i class="fa fa-list-alt"></i>
              <a href="">Category</a>
              <i class="fa fa-calendar-alt"></i>
              <p>01-Jan-2045</p>
            </div>
            <div class="blog-text">
              <p>
                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                {/* facili ornare velit non vulpte liqum metus tortor. Lorem ipsum
                  dolor sit amet elit. Neca pretim miura bitur facili ornare
                  velit non vulpte liqum metus tortor */}
              </p>
              <a class="btn referencement_btn" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="blog-item col-lg-4">
          <div class="blog-img">
            <img src={latest} alt="Blog" />
          </div>
          <div class="blog-content">
            <h2 class="blog-title">Vetrines</h2>
            <div class="blog-meta">
              <i class="fa fa-list-alt"></i>
              <a href="">Category</a>
              <i class="fa fa-calendar-alt"></i>
              <p>01-Jan-2045</p>
            </div>
            <div class="blog-text">
              <p>
                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                {/* facili ornare velit non vulpte liqum metus tortor. Lorem ipsum
                  dolor sit amet elit. Neca pretim miura bitur facili ornare
                  velit non vulpte liqum metus tortor */}
              </p>
              <a class="btn" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="blog-item col-lg-4">
          <div class="blog-img">
            <img src={latest} alt="Blog" />
          </div>
          <div class="blog-content">
            <h2 class="blog-title">E-commerce</h2>
            <div class="blog-meta">
              <i class="fa fa-list-alt"></i>
              <a href="">Category</a>
              <i class="fa fa-calendar-alt"></i>
              <p>01-Jan-2045</p>
            </div>
            <div class="blog-text">
              <p>
                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                {/* facili ornare velit non vulpte liqum metus tortor. Lorem ipsum
                  dolor sit amet elit. Neca pretim miura bitur facili ornare
                  velit non vulpte liqum metus tortor */}
              </p>
              <a class="btn" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Referencement;
