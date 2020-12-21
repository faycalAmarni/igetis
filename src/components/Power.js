import React from 'react'
import PropTypes from 'prop-types'

class Power extends React.Component {
  render () {
      return(
        <div className="fact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-2.png" alt="Icon" />
                            <h2>Visibilité</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-3.png" alt="Icon" />
                            <h2>Analyse</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-9.png" alt="Icon" />
                            <h2>Ciblage</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-6.png" alt="Icon" />
                            <h2>Temps</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
  }
}

export default Power;
