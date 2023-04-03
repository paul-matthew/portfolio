import React, { Component } from 'react';
import Logo from './Logo.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgWidth: 50,
      imgHeight: 50
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    let imgWidth, imgHeight;

    if (window.innerWidth >= 700) {
      imgWidth = 150;
      imgHeight = 150;
    } else if (window.innerWidth >= 361) {
      imgWidth = 65;
      imgHeight = 65;
    } else {
      imgWidth = 50;
      imgHeight = 50;
    }

    this.setState({
      imgWidth,
      imgHeight
    });
  };

  render() {
    const { imgWidth, imgHeight } = this.state;

    return (
      <div className="row">
        <div className="Logo">
          <img src={Logo} width={imgWidth} height={imgHeight} />
        </div>
      </div>
    );
  }
}