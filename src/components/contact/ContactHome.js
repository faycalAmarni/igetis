import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^(([\+][0-9]{1,4})|0)[0-9]{9}$/;
const SignupSchema = Yup.object().shape({
  nom: Yup.string().min(2, ' ').max(50, ' ').required(' '),
  prenom: Yup.string().min(2, ' ').max(50, ' ').required(' '),
  email: Yup.string().email('email Invalid').required(' '),
  sujet: Yup.string().required(' '),
  message: Yup.string().min(10, ' ').required(' '),
  telephone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

const ContactHome = (props) => {
  return (
    <div className="container contact">
      <div className="section-header">
        <h2>Contactez-nous pour toute information</h2>
        <span class="section-divider"></span>
      </div>
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="contact-info">
            <div className="contact-icon">
              <i className="fa fa-map-marker-alt" />
            </div>
            <div className="contact-text">
              <h3>Notre siège social</h3>
              <p>123 Rue, Paris, FRANCE</p>
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
            <Formik
              initialValues={{
                nom: '',
                prenom: '',
                email: '',
                telephone: '',
                sujet: '',
                message: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                // same shape as initial values

                console.log(values);
                window.emailjs.send("service_90prgkk","template_4catidt", {
                   email: values.email,
                   nom: values.nom,
                   prenom : values.prenom,
                   telephone : values.telephone,
                   message: values.message,
                   sujet : values.sujet
                 },
                 'user_C2QWfjr4NpYSiQyQHTD48',);
                actions.resetForm();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div class="row">
                    <div className="col-md-6 control-group ">
                      <Field
                        placeholder="Nom*"
                        className="form-control"
                        name="nom"
                        style={
                          errors.nom && touched.nom
                            ? { borderColor: '#BE4B49', borderWidth: 2 }
                            : {}
                        }
                      />
                      <div className="help-block text-danger">
                        {' '}
                        {errors.nom && touched.nom ? errors.nom : null}
                      </div>
                      <br />
                    </div>
                    <div className="col-md-6 control-group ">
                      <Field
                        name="prenom"
                        className="form-control"
                        placeholder="Prénom*"
                        style={
                          errors.prenom && touched.prenom
                            ? { borderColor: '#BE4B49', borderWidth: 2 }
                            : {}
                        }
                      />
                      <div className="help-block text-danger">
                        {' '}
                        {errors.prenom && touched.prenom ? errors.prenom : null}
                      </div>
                      <br />
                    </div>
                  </div>
                  <div class="row">
                    <div className="control-group col-md-6">
                      <Field
                        name="email"
                        placeholder="Email*"
                        className="form-control"
                        style={
                          errors.email && touched.email
                            ? { borderColor: '#BE4B49', borderWidth: 2 }
                            : {}
                        }
                      />

                      <div className="help-block text-danger">
                        {' '}
                        {errors.email && touched.email ? errors.email : null}
                      </div>
                      <br />
                    </div>
                    <div className="control-group col-md-6">
                      <Field
                        placeholder="Téléphone"
                        name="telephone"
                        className="form-control"
                        style={
                          errors.telephone && touched.telephone
                            ? { borderColor: '#BE4B49', borderWidth: 2 }
                            : {}
                        }
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <Field
                      as="select"
                      name="sujet"
                      placeholder="Sujet"
                      className="form-control"
                      style={
                        errors.sujet && touched.sujet
                          ? { borderColor: '#BE4B49', borderWidth: 2 }
                          : {}
                      }
                    >
                      <option selected disabled value="">
                        Sujet*
                      </option>
                      <option value="Demande de renseignements">Demande de renseignements</option>
                      <option value="Demande de devis">Demande de devis</option>
                    </Field>
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <Field
                      as="textarea"
                      name="message"
                      className="form-control"
                      style={
                        errors.message && touched.message
                          ? { borderColor: '#BE4B49', borderWidth: 2 }
                          : {}
                      }
                      placeholder="Message*"
                    />

                    <div className="help-block text-danger">
                      {' '}
                      {errors.message && touched.message
                        ? errors.message
                        : null}
                    </div>
                    <br />
                  </div>
                  <div>
                    <button className="btn" type="submit">
                      Envoyer
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
