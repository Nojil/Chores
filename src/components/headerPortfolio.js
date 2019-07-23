import React, { Component } from "react";
import { Popover, PopoverBody } from "reactstrap";

import "../styles/headerPortfolio.css";

class HeaderPortfolio extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <div className="profilePicture" id="Popover1"/>

        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverBody>
            <div className="row">
              <div className="col">
                <p>Test</p>
              </div>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default HeaderPortfolio;
