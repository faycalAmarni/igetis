import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
import Background from "../../assets/img/background-faq.jpg"

const Faq = (props) => {
  return (
    <div class="service ">
        <section class="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
          <div class="overlay"></div>
          <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center">
              <div class="col-md-9  mb-5 text-center">
                <h1 class="mb-0 bread">NOS RÉPONSES À VOS QUESTIONS</h1>
              </div>
            </div>
          </div>
        </section>
        <section class="ftco-section">
          <div class="container">
            <div class="section-header">
                <h2> VOS QUESTIONS FREQUENTES</h2>
            </div>
            <div class="row tabulation ">
              <div class="col-md-4">
                <ul class="nav nav-pills nav-fill d-md-flex d-block flex-column">
                  <li class="nav-item text-left">
                    <a class="nav-link active py-4" data-toggle="tab" href="#services-1">MÉTHODE DE VENTE</a>
                  </li>
                  <li class="nav-item text-left">
                    <a class="nav-link py-4" data-toggle="tab" href="#services-2">PRESTATIONS </a>
                  </li>
                  <li class="nav-item text-left">
                    <a class="nav-link py-4" data-toggle="tab" href="#services-3">RÉSILIATION DU CONTRAT</a>
                  </li>
                  <li class="nav-item text-left">
                    <a class="nav-link py-4" data-toggle="tab" href="#services-4">PAIEMENTS</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-8">
                <div class="tab-content">
                  <div class="tab-pane container p-0 active" id="services-1">
                    <h3><a href="#">MÉTHODE DE VENTE</a></h3>
                      <Accordion defaultActiveKey="">
                        <Card className="cardfaq">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            <h4> Qui sont vos clients ? </h4>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <p>Nous sommes à l’écoute de toutes les sociétés ayant besoin de communiquer. Nous disposons par conséquent d’une clientèle variée allant d’une PME aux grands comptes. </p>
                              <p>Nous proposons de la communication Web et Print afin de permettre à nos clients d’avoir un seul prestataire pour gérer et mener à bien leur communication et leur identité visuelle.</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="1">
                          <h4>  Qui sont vos clients / partenaires ?</h4>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>
                              <p>Nous pouvons proposer à certains prospects un partenariat. Si les conditions sont réunies, nous proposons le partenariat, ce qui implique un tarif préférentiel et divers avantages.</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="2">
                          <h4>  Quel est l’objectif du partenariat ?</h4>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>
                              <p>Le partenariat permet de mettre en place une relation commerciale privilégiée dans laquelle les deux parties trouvent un intérêt. D’autre part, le partenariat leur permet de bénéficier de tarifs très préférentiels.</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey="3">
                          <h4> Comment se déroule la mise en place d’un contrat lorsqu’il ne s’agit pas d’un partenariat ?</h4>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <p>Comme pour le partenariat, suite à un audit et une analyse de votre structure, nous élaborons un cahier des charges afin de définir vos souhaits et attentes. Celui-ci est par la suite vérifié par Le Lab afin de vous proposer des prestations répondant à vos attentes et respectant les critères du Web.</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                </div>
                  <div class="tab-pane container p-0 fade" id="services-2">
                    <h3><a href="#">PRESTATIONS</a></h3>

                  </div>
                  <div class="tab-pane container p-0 fade" id="services-3">
                    <h3><a href="#">RÉSILIATION DU CONTRAT</a></h3>

                  </div>
                  <div class="tab-pane container p-0 fade" id="services-4">
                    <h3><a href="#">PAIEMENTS</a></h3>

                  </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default Faq
