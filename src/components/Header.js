import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <div className="top-bar d-none d-md-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="top-bar-left">
                  <div className="text">
                    <i className="far fa-clock"></i>
                    <h2>8:00 - 9:00</h2>
                    <p>Lun - Ven</p>
                  </div>
                  <div className="text">
                    <i className="fa fa-phone-alt"></i>
                    <h2>+123 456 7890</h2>
                    <p>Pour rendez-vous</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="top-bar-right">
                  <div className="social">
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              IGETIS
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto">
                <NavLink to="/">
                  <a
                    className={
                      'nav-item nav-link ' + (path == '/' ? 'active' : '')
                    }
                  >
                    Home
                  </a>
                </NavLink>
                <NavLink to="/About">
                  <a
                    className={
                      'nav-item nav-link ' + (path == '/About' ? 'active' : '')
                    }
                  >
                    À PROPOS
                  </a>
                </NavLink>
                <NavLink to="/Prestation">
                  <a
                    className={
                      'nav-item nav-link ' +
                      (path == '/Prestation' ? 'active' : '')
                    }
                  >
                    PRESTATIONS
                  </a>
                </NavLink>
                <NavLink to="/NotFoundPage">
                  <a className="nav-item nav-link">RÉFÉRENCES</a>
                </NavLink>
                <NavLink to="/Faq">
                  <a
                    className={
                      'nav-item nav-link ' + (path == '/Faq' ? 'active' : '')
                    }
                  >
                    FAQ
                  </a>
                </NavLink>
                <Link to="/Contact">
                  <a
                    href="./Contact.js"
                    className={
                      'nav-item nav-link ' +
                      (path == '/Contact' ? 'active' : '')
                    }
                  >
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
