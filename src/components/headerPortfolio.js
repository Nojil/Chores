import React, { Component } from 'react';
import { Popover, OverlayTrigger} from 'react-bootstrap';

import '../styles/headerPortfolio.css';

class HeaderPortfolio extends Component {
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
    
    const Example = () => (
      <OverlayTrigger trigger="click" placement="bottom" overlay={{popover}}>
        <div className="profilePicture"></div>
      </OverlayTrigger>
    );
    
    return (
      <Example />
    )
  }
}

export default HeaderPortfolio;
