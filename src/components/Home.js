import React from 'react'
import PropTypes from 'prop-types'
import Caros from "./Caros"
import ContactHome from "./ContactHome"
import AboutHome from "./AboutHome"
import ServiceHome from "./ServiceHome"
import IndexReference from "./IndexReference"

class Home extends React.Component {
  render () {
      return(
        <div>
          <Caros />
          <IndexReference />
          <AboutHome />
          <ServiceHome />
          <ContactHome />
        </div>
      )
  }
}

export default Home;
