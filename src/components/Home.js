import React from 'react';
import Caros from './Caros';
import ContactHome from './contact/ContactHome';
import NosPrestation from './prestation/NosPrestation';
import Puissance from './about/Puissance';
import Apropos from './about/Apropos';
import Testimonial from './Testimonial';
import CreationReferencement from './about/CreationReferencement';
import Referencement from './referencement/Referencement';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Caros />
        <Puissance />
        <CreationReferencement />
        <Testimonial />
        <NosPrestation />
        <Apropos />
        <ContactHome />
        <Referencement />

      </div>
    );
  }
}

export default Home;
