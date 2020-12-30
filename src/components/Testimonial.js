import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/css/owl.css';
import img1 from '../assets/img/testimonial-1.jpg';
import img2 from '../assets/img/testimonial-2.jpg';
import img3 from '../assets/img/testimonial-3.jpg';
import img4 from '../assets/img/testimonial-4.jpg';
// import './owl.css';
{
  /* <img src="img/testimonial-1.jpg" alt="Image" />; */
}
const Testimonial = () => {
  return (
    <div class="testimonial">
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: '20px' }}>
          <div class="col-sm-12 ">
            Owl Carousel with Auto Play Property In React Application
          </div>
        </div>
      </div>

      <div class="container">
        <OwlCarousel
          class="testimonials-carousel owl-carousel"
          items={3}
          // margin={3}
          animateOut={'fadeOut'}
          animateIn={'fadeIn'}
          smartSpeed={300}
          //     animateIn: 'fadeIn',
          dots={false}
          autoplay={true}
          nav={true}
          navText={[
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
          ]}
        >
          <div class="testimonial-item">
            <img src={img1} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>
            <h3>Profession</h3>
          </div>

          <div class="testimonial-item">
            <img src={img2} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>
            <h3>Profession</h3>
          </div>

          <div class="testimonial-item">
            <img src={img3} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>
            <h3>Profession</h3>
          </div>

          <div class="testimonial-item">
            <img src={img4} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>
            <h3>Profession</h3>
          </div>

        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
