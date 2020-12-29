import React, { useEffect } from 'react';
import AOS from 'aos';
import '../../styles/css/creation.css';
import 'aos/dist/aos.css';

import productImg from '../../assets/img/advanced-feature-1.jpg';

const CreationReferencement = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <section id="advanced-features">
        <div class="features-row section-bg">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <img
                  class="advanced-feature-img-right aos-init aos-animate"
                  src={productImg}
                  alt=""
                  data-aos="fade-bottom"
                />
                <div data-aos="fade-bottom" class="aos-init aos-animate">
                  <h2>
                    Nous créons des sites vitrine modernes, flexibles et clés en
                    main
                  </h2>
                  <h3>
                    Notre cœur de métier est la réalisation de sites Internet
                    vitrine et e-commerce.
                  </h3>
                  <p>
                    Nous imaginons le site qui répondra à votre identité puisque
                    chaque entreprise a ses besoins et ses attentes. Vos
                    demandes étant uniques, notre objectif est de contribuer à
                    la création de votre site en respectant ainsi vos exigences.
                  </p>
                  {/* <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p> */}
                  <a data-aos="fade-right" className="btn" href>
                    NOS PRESTATIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="features-row">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <img
                  class="advanced-feature-img-left"
                  src={productImg}
                  alt=""
                />
                <div data-aos="fade-bottom" class="aos-init">
                  <h2>RÉFÉRENCEMENT LOCAL</h2>
                  <h3>
                    Notre cœur de métier est la réalisation de sites Internet
                    vitrine et e-commerce.
                  </h3>
                  <i
                    class="ion-ios-paper-outline aos-init"
                    data-aos="fade-bottom"
                  ></i>
                  <p data-aos="fade-bottom" class="aos-init">
                    Nous proposons à votre entreprise une visibilité maximale en
                    fonction des tendances de Google en matière de
                    positionnement. Un référencement SEO local ou national selon
                    vos besoins.
                  </p>
                  <i
                    class="ion-ios-color-filter-outline aos-init"
                    data-aos="fade-bottom"
                    data-aos-delay="200"
                  ></i>
                  {/* <p data-aos="fade-left" data-aos-delay="200" class="aos-init">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum.
                  </p>
                  <i
                    class="ion-ios-barcode-outline aos-init"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  ></i> */}
                  {/* <p data-aos="fade-left" data-aos-delay="400" class="aos-init">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum.
                  </p> */}
                  <a data-aos="fade-left" className="btn" href>
                    NOS PRESTATIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="features-row section-bg">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <img
                  class="advanced-feature-img-right aos-init"
                  src={productImg}
                  alt=""
                  data-aos="fade-left"
                />
                <div data-aos="fade-right" class="aos-init">
                  <h2>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </h2>
                  <h3>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <i class="ion-ios-albums-outline"></i>
                  <p>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default CreationReferencement;
