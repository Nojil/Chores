import React, { Component } from 'react';

import '../styles/sidemenu.css';

class Sidemenu extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
        <div className="sidemenu sidemenu-logo-container h-100">
            <div className="w-100 text-center" style={{ height: '71px', borderBottom: '1px solid #f8f9fa'}}>
                <div className="m-0 p-0 sidemenu-logo">C</div>
            </div>
            <ul className="d-flex flex-column p-0 sidemenu-menu">
                <li><i className="fas fa-bars"></i></li>
                <li><i className="fas fa-bars"></i></li>
            </ul>
        </div>
        
    )
  }
}

export default Sidemenu;
