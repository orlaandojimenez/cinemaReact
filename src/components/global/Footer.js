/* eslint-disable */
import React, { Component } from 'react';
import Proptypes from 'prop-types';

import '../assets/css/Footer.css'
class Footer extends Component {
  static Proptypes = {
    year: Proptypes.number.isRequired
  }
  render() {
    const { year } = this.props
    return (
      <div>
        <footer> 
        CineDEV  - {year}
      </footer>
      </div>
    );
  }
}

export default Footer;

