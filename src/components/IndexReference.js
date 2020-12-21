import React from 'react'
import PropTypes from 'prop-types'

class IndexReference extends React.Component {
  render () {
    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/icon-3.png" alt="Icon" />
          </div>
          <div class="carousel-item">
            <img src="img/icon-2.png" alt="Icon" />
          </div>
          <div class="carousel-item">
              <img src="img/icon-1.png" alt="Icon" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>





    )
  }
}

export default IndexReference;
