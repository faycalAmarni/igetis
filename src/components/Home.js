import React from 'react';
import Caros from './Caros';
import ContactHome from './contact/ContactHome';
import NosPrestation from './prestation/NosPrestation';
import Puissance from './about/Puissance';
import Apropos from './about/Apropos';
import Testimonial from './Testimonial';
import CreationReferencement from './about/CreationReferencement';
import Referencement from './referencement/Referencement';
import Service from './prestation/Service';
class Home extends React.Component {
  render() {
    return (
      <div>
        <Caros />
        <Service />
        <Puissance />
        <CreationReferencement />
        <Apropos />
        <NosPrestation />
        <Testimonial />
        <Referencement />
        <ContactHome />
      </div>
    );
  }
}

export default Home;
