import React from 'react'
import PropTypes from 'prop-types'

class Contact extends React.Component {
  render () {

    return (
      <div className="contact mt-125">
          <div className="container">
            <div className="section-header">
              <h2>Contactez-nous pour toute information</h2>
            </div>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker-alt" />
                  </div>
                  <div className="contact-text">
                    <h3>Notre siège social</h3>
                    <p>123 Rue,  Paris, FRANCE</p>
                  </div>
              </div>
              <div className="contact-info">
                <div className="contact-icon">
                  <i className="fa fa-phone-alt" />
                </div>
                <div className="contact-text">
                  <h3>Téléphone</h3>
                  <p>+012 345 6789</p>
                </div>
              </div>
              <div className="contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p>info@example.com</p>
                  </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="contact-form">
                <div id="success" />
                <form
                    name="sentMessage"
                    id="contactForm"
                    novalidate="novalidate" >
                  <div className="control-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Votre Nom"
                        required="required"
                        data-validation-required-message="Veuillez renseigner votre nom" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Votre Email"
                        required="required"
                        data-validation-required-message="Veuillez renseigner votre email" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Sujet"
                      required="required"
                      data-validation-required-message="Veuillez renseigner le sujet" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Veuillez renseigner un Message" />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn"
                      type="submit"
                      id="sendMessageButton">
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Contact;
