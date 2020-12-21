import React from 'react'
import PropTypes from 'prop-types'
import Caros from "./Caros"
import Power from "./Power"
import About from "./About"
import Service from "./Service"
class Home extends React.Component {
  render () {
      return(
        <div>
          <Caros />
          <Power />
          <About />
          <Service />
        </div>
      )
  }
}

export default Home;
