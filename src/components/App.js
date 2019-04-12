/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import './assets/css/App.css';
// Components
import Header from './global/Header';
import Footer from './global/Footer';
import Body from './global/Body';

class App extends Component {
  static Proptypes = {
    children: PropTypes.object.isRequired
  }
  setYear =() => {
    return new Date().getFullYear();
  }
  render() {
    const {children} = this.props;
    const myName = "Orlando"
    return (
      <div className="App">
        <div>
          <Header name={myName}/>
        </div>
        <div>
          <Body content={children} />
        </div>
        <div>
          <Footer  year={this.setYear()}/>
        </div>
      </div>
    );
  }
}

export default App;
