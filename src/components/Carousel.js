/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Image1 from '../assets/img/reference1.jpg';
import Image2 from '../assets/img/reference2.jpg';
import Image3 from '../assets/img/reference3.jpg';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: Image1,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: Image2,
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: Image3,
    altText: "",
    caption: "",
    header: ""
  },
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped all-screen" id="reference">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="ref">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Nos Références
                </h1>
                <p className="lead text-white mt-4">
                  IGETIS System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn"
                  style={{color: "#085EA0", borderColor: "#FFFFFF", backgroundColor: "#fff"}}
                >
                  TOUTES NOS RÉFÉRENCES
                </Button>
              </Col>
              <Col className="rounded" lg="6" style={{padding: 50}}>
                <div>
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}

        </section>
      </>
    );
  }
}

export default Carousel;
