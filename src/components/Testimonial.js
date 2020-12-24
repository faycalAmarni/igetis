import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/css/owl.css';
// import './owl.css';
{
  /* <img src="img/testimonial-1.jpg" alt="Image" />; */
}
const Testimonial = () => {
  return (
    <div>
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: '20px' }}>
          <div class="col-sm-12 btn btn-info">
            Owl Carousel with Auto Play Property In React Application
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <OwlCarousel items={4} margin={8} autoplay={true}>
          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>

          <div>
            <img src="img/testimonial-1.jpg" alt="Image" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonial;
