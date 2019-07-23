import React, { Component } from 'react';
import './styles/App.css';

import Header from "./components/header";
import Sidemenu from "./components/sidemenu"

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }
  render() {
    return (
      <div className="row p-0 m-0">
        <div className="p-0 side-menu-col" style={{ height: '100vh'}}>
          <Sidemenu /> 
        </div>
        <div className="col">
          <div className="row">
            <div className="col px-0">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              
            </div>
            <div className="col-md-11">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
