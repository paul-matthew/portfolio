import React, { Component } from 'react';
import Logo from './Logo.png';
export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="Logo">
          <img src={Logo} width="125" height="125" />
        </div>
      </div>
    );
  }
} 