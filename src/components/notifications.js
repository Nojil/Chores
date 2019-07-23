import React, { Component } from 'react';

import '../styles/notifcations.css'

class Notifications extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
        <div className="ml-auto mr-4">
            <i className="far fa-bell fa-lg"></i>
        </div>
    )
  }
}

export default Notifications;
