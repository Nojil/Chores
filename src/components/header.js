import React, { Component } from 'react';

import '../styles/header.css';

import HeaderPortfolio from './headerPortfolio';
import Notifcations from './notifications';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Notifcations />
        <HeaderPortfolio />
      </nav>
    )
  }
}

export default Header;
