import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="demo-footer">
        <div>
          <div>Copyright {new Date().getFullYear()}.Uruj Chat</div>
          <div>All rights reserved</div>
        </div>
        <div>
          <div>Made with love in India :) </div>
        </div>
      </div>
    );
  }
}

export default Footer;
