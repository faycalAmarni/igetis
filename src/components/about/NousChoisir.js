import React from 'react'

const NousChoisir = (props) => {
  return (
    <div className="feature">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-6">
            <div className="feature-img">
              <img src="img/office1.jpg" alt="Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header">
              <h2>
                Pourquoi Nous Choisir ?
              </h2>
            </div>
            <p>
              Nous tenons à dynamiser votre présence sur Internet ainsi que dans les moteurs de recherches. Nous vous proposons pour cela différentes prestations qui vous permettront de bénéficier d’une bonne notoriété auprès de vos clients et prospects.
            </p>
            <div className="row counters">
              <div className="col-6">
                <i className="fa fa-user" />
                <div className="counters-text">
                  <h2 data-toggle="counter-up">100</h2>
                  <p>
                      Notre Personnel
                  </p>
                </div>
              </div>
              <div className="col-6">
                <i className="fa fa-users" />
                <div className="counters-text">
                  <h2 data-toggle="counter-up">200</h2>
                  <p>
                    Nos Clients
                  </p>
                </div>
              </div>
              <div className="col-6">
                <i className="fa fa-check" />
                <div className="counters-text">
                  <h2 data-toggle="counter-up">300</h2>
                  <p>
                    Projets Achevés
                  </p>
                </div>
              </div>
              <div className="col-6">
                <i className="fa fa-running" />
                <div className="counters-text">
                  <h2 data-toggle="counter-up">400</h2>
                  <p>
                      Projets en Cours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NousChoisir
