import React from 'react'
import '../../styles/css/service.css';

const Service = (props) => {
  return (
    <section class="container service">
        <div class=" serv">
          <div class="col-lg-3 col-md-4">
            <div class="service-item">
              <h3>CRÉATIONS SUR-MESURE</h3>

              <p>  Nous imaginons le site qui répondra à votre identité  besoins et ses attentes.
                      Vos demandes étant uniques, notre objectif est de contribuer à la création de votre site
                      en respectant ainsi vos exigences.
                        en respectant ainsi vos exigences.
              </p>
              <div >
                <a className="btn" href>
                  NOS PRESTATIONS
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 item">
            <div class="service-item">
              <h3>RÉFÉRENCEMENT LOCAL</h3>
              <p>Nous proposons à votre entreprise une visibilité maximale en fonction des tendances de Google
                    en matière de positionnement. Un référencement SEO local ou national selon vos besoins.
              </p>
              <div >
                <a className="btn" href>
                  NOS PRESTATIONS
                </a>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Service
