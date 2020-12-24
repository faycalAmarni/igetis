import React from 'react'
import Caros from "./Caros"
import ContactHome from "./contact/ContactHome"
import NosPrestation from "./prestation/NosPrestation"
import Puissance from "./about/Puissance"
import Apropos from './about/Apropos'

class Home extends React.Component {
  render () {
      return(
        <div>
          <Caros />
          <Puissance />
          <Apropos />
          <NosPrestation />
          <ContactHome />
        </div>
      )
  }
}

export default Home;
