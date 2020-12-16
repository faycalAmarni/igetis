import template from "../img/template.jpg";

function Caros(){
    return (

      <div class="carousel">

          <div class="container-fluid">
              <div class="owl-carousel">
                  <div class="carousel-item">
                      <div class="carousel-img">
                          <img  src={template} alt="temp" />
                      </div>
                      <div class="carousel-text">
                          <h1>Fastest Way to Achieve Success</h1>
                          <p>
                              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                          </p>
                          <div class="carousel-btn">
                              <a class="btn" href=""><i class="fa fa-link"></i>Get Started</a>
                          </div>
                      </div>
                  </div>


              </div>
          </div>
      </div>

    );
  }



export default Caros
