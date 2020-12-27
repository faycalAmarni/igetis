import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
import Background from "../../assets/img/background-faq.jpg"

const Faq = (props) => {
  return (
    <div class="service">
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
                      <section id="faq">
                        <div class="container">
                          <ul id="faq-list" >
                            <li>
                              <a data-toggle="collapse" class="collapsed" href="#faq1">Qui sont vos clients ? </a>
                              <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                  Nous sommes à l’écoute de toutes les sociétés ayant besoin de communiquer. Nous disposons par conséquent d’une clientèle variée allant d’une PME aux grands comptes.
                                </p>
                                <p>
                                  Nous proposons de la communication Web et Print afin de permettre à nos clients d’avoir un seul prestataire pour gérer et mener à bien leur communication et leur identité visuelle.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq2" class="collapsed">Qui sont vos clients / partenaires ?</a>
                              <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                  Nous pouvons proposer à certains prospects un partenariat. Si les conditions sont réunies, nous proposons le partenariat, ce qui implique un tarif préférentiel et divers avantages.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq3" class="collapsed">Quel est l’objectif du partenariat ?</a>
                              <div id="faq3" class="collapse" data-parent="#faq-list">
                                <p>
                                  Le partenariat permet de mettre en place une relation commerciale privilégiée dans laquelle les deux parties trouvent un intérêt. D’autre part, le partenariat leur permet de bénéficier de tarifs très préférentiels
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq4" class="collapsed">Comment se déroule la mise en place d’un contrat lorsqu’il ne s’agit pas d’un partenariat ? </a>
                              <div id="faq4" class="collapse" data-parent="#faq-list">
                                <p>
                                  Comme pour le partenariat, suite à un audit et une analyse de votre structure, nous élaborons un cahier des charges afin de définir vos souhaits et attentes. Celui-ci est par la suite vérifié par Le Lab afin de vous proposer des prestations répondant à vos attentes et respectant les critères du Web
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq5" class="collapsed">Comment vous démarquez-vous de vos concurrents ?</a>
                              <div id="faq5" class="collapse" data-parent="#faq-list">
                                <p>
                                  Le Lab, composé de techniciens spécialisés, est situé à Artigues-près-Bordeaux. Vous bénéficiez également d’un accompagnement personnalisé par votre chargé de suivi client. Ainsi, vous disposez d’un service de proximité, et d’interlocuteurs référents
                                </p>
                                <p>
                                  Par ailleurs, afin que nos réalisations puissent associer le sur-mesure et la qualité, nous effectuons une veille constante sur les évolutions du Web et proposons des prestations à la pointe de la technologie. Nos techniciens sont à votre écoute pour répondre à vos questions et vous conseiller dans votre projet
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>
                </div>
                  <div class="tab-pane container p-0 fade" id="services-2">
                    <h3><a href="#">PRESTATIONS</a></h3>
                      <section id="faq">
                        <div class="container">
                          <ul id="faq-list" >
                            <li>
                              <a data-toggle="collapse" class="collapsed" href="#faq1">Quelles sont les étapes de la réalisation d’un site internet  ? </a>
                              <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                  Une fois le cahier des charges complété, celui-ci est transmis au Lab.
                                </p>
                                <p>
                                  Chaque service (Graphisme, Développement, Mise en page et Référencement) étudie vos demandes. Si besoin, nous vous proposons des modifications afin quefin que votre réalisation ou votre référencement respecte les critères du Web.
                                </p>
                                <p>
                                  Une fois votre site réalisé, il vous sera présenté par votre chargé de suivi client, qui vous montrera également vos différents espaces personnalisés. Ainsi vous verrez directement avec votre chargé de suivi client les modifications que vous souhaitez apporter avant la mise en page et la finalisation des actions de référencement sur votre site
                                </p>
                                <p>
                                  A tout moment si vous avez des questions, votre chargé de suivi client ainsi que Le Lab sont à votre écoute.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq2" class="collapsed">Quels sont les délais de réalisation  ?</a>
                              <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                  Alliant efficacité, personnalisation et qualité, les délais de réalisation peuvent varier en fonction du type de site internet que vous souhaitez (de quelques jours pour un site vitrine sans option à quelques semaines pour un site disposant d’une base de données, d’un paiement en ligne ou d’options spécifiques). Vous serez tenu informé de l’avancement de nos travaux au fur et à mesure.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq3" class="collapsed">En quoi consiste la livraison  ?</a>
                              <div id="faq3" class="collapse" data-parent="#faq-list">
                                <p>
                                  A l’issue du rendez-vous avec le chargé de suivi clients, vous signez le procès-verbal de livraison. Ce document permet d’acter votre accord sur le site livré, et de débuter l’exploitation du site
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq4" class="collapsed">A quel moment le site est référencé ? </a>
                              <div id="faq4" class="collapse" data-parent="#faq-list">
                                <p>
                                  Le Lab débute les actions du référencement dès la réception du cahier des charges. Celui-ci ne peut être optimal que s’il comporte suffisamment de texte.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>
                  </div>
                  <div class="tab-pane container p-0 fade" id="services-3">
                    <h3><a href="#">RÉSILIATION DU CONTRAT</a></h3>
                      <section id="faq">
                        <div class="container">
                          <ul id="faq-list" >
                            <li>
                              <a data-toggle="collapse" class="collapsed" href="#faq1">Est-il possible de résilier mon contrat ? </a>
                              <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                  Les conditions de résiliation sont mentionnées dans les clauses du contrat que vous avez signé. Nous vous invitons donc à vous reporter aux conditions générales, pour savoir à quel moment vous pouvez résilier, par quel moyen, et quel est le délai de préavis
                                </p>
                                <p>
                                  Si votre contrat prévoit une durée minimale d’engagement, vous ne pouvez résilier avant le terme qu’en réglant une indemnité de résiliation
                                </p>
                                <p>
                                  Dans tous les cas, votre demande de résiliation devra être envoyée par lettre recommandée avec accusé de réception adressée à Incomm®, ainsi qu’à notre partenaire financier, le cas échéant.
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq2" class="collapsed">Qui puis-je contacter au sujet de la résiliation ? </a>
                              <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                  Si vous souhaitez obtenir des informations complémentaires, vous pouvez contacter votre chargé de suivi client dont les coordonnées vous ont été communiquées au moment de la livraison
                                </p>
                                <p>
                                  Vous pouvez également nous faire une demande par le biais de votre espace Mon Compte dont l’adresse et les identifiants vous ont été remis lors de la livraison
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>
                  </div>
                  <div class="tab-pane container p-0 fade" id="services-4">
                    <h3><a href="#">PAIEMENTS</a></h3>
                      <section id="faq">
                        <div class="container">
                          <ul id="faq-list" >
                            <li>
                              <a data-toggle="collapse" class="collapsed" href="#faq1">Quand commence le paiement ? </a>
                              <div id="faq1" class="collapse" data-parent="#faq-list">
                                <p>
                                  Le paiement des échéances, convenues au moment de la signature du contrat, débute après la livraison du site internet
                                </p>
                              </div>
                            </li>
                            <li>
                              <a data-toggle="collapse" href="#faq2" class="collapsed">Passer par un partenaire financier change-t-il quelque chose pour moi ? </a>
                              <div id="faq2" class="collapse" data-parent="#faq-list">
                                <p>
                                  Les conditions contractuelles, notamment tarifaires, ne changent aucunement. Simplement vous ne réglez pas les échéances du contrat à Incomm® mais au partenaire financier. De même la résiliation du contrat est gérée par le partenaire financier
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </section>
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
