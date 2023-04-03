import React, { Component } from 'react';
import Logo from './Logo.png';

export default class Header extends Component {
  render() {
    let imgWidth, imgHeight;

    if (typeof window !== 'undefined' && window.innerWidth >= 700) {
      imgWidth = 150;
      imgHeight = 150;
    } else if (typeof window !== 'undefined' && window.innerWidth >= 361) {
      imgWidth = 65;
      imgHeight = 65;
    } else {
      imgWidth = 50;
      imgHeight = 50;
    }

    return (
      <div className="row">
        <div className="Logo">
          <img
            src={Logo}
            width={imgWidth}
            height={imgHeight}
          />
        </div>
      </div>
    );
  }
}
