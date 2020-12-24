import template from '../assets/img/meeting.jpg';
import { Link } from 'react-router-dom';
function Caros() {
  return (
    <div class="carousel">
      <div class="container-fluid">
        <div class="owl-carousel">
          <div class="carousel-item">
            <div class="carousel-img">
              <img src={template} alt="temp" />
            </div>
            <div class="carousel-text">
              <h1>IGETIS Web</h1>
              <p>Création de site internet dynamique et référencement</p>
              <div class="carousel-btn">
                <Link to="/Contact">
                  <a class="btn" href="">
                    <i class="fa fa-email"></i>Nous contacter
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caros;
