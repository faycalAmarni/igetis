import React, {useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../styles/css/owl.css';
import img1 from '../assets/img/testimonial-1.jpg';
import img2 from '../assets/img/testimonial-2.jpg';
import img3 from '../assets/img/testimonial-3.jpg';
import img4 from '../assets/img/testimonial-4.jpg';
import AOS from 'aos';
// import './owl.css';
{
  /* <img src="img/testimonial-1.jpg" alt="Image" />; */
}
const Testimonial = () => {

    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <section class="testimonial" >
      <div class="container" data-aos="fade-up">
        <div className="section-header">
          <h2 style={{color: "#FFFFFF"}}>What our users say</h2>
          <span class="section-divider"></span>
        </div>
      </div>

      <div class="container" data-aos="fade-up">
        <OwlCarousel
          class="testimonials-carousel owl-carousel"
          items={1}

          // margin={3}
          animateOut={'fadeOut'}
          animateIn={'fadeIn'}
          smartSpeed={100}
          dots={false}
          loop={true}
          autoplay={true}
          nav={true}
          navText={[
            "<i class='fa fa-angle-left' aria-hidden='true'></i>",
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
          ]}
        >
          <div class="testimonial-item" style={{alignItems: 'center'}}>
            <img src={img1} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>
          </div>

          <div class="testimonial-item">
            <img src={img2} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>

          </div>

          <div class="testimonial-item">
            <img src={img3} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>

          </div>

          <div class="testimonial-item">
            <img src={img4} alt="Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis mauris. Vivamus egestas eleifend dui ac consequat
            </p>
            <h2>Client Name</h2>

          </div>

        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonial;
