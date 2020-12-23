import React from 'react'
import ContactHome from './ContactHome'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Background from "../img/contact.jpg"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const SignupSchema = Yup.object().shape({
   nom: Yup.string().min(2, ' ').max(50, ' ').required(' '),
   prenom: Yup.string().min(2, ' ').max(50, ' ').required(' '),
   email: Yup.string().email('email Invalid').required(' '),
   sujet : Yup.string().required(" "),
   message : Yup.string().min(20, ' ').required(" "),
   telephone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
 });

class Contact extends React.Component {
  render () {

    return (
      <div className="contact">
          <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${Background})`}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
              <div className="row no-gutters slider-text align-items-end justify-content-center">
                <div className="col-md-9  mb-5 text-center">
                  <h1 className="mb-0 bread">NOUS CONTACTER</h1>
                </div>
              </div>
            </div>
          </section>
          <div class="mt-125">
              <ContactHome />
          </div>
      </div>


    )
  }
}

export default Contact;
