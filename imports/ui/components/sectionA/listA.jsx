import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();

// Intro component
export default class ListA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.what-we-do-list').hide();
    $('.tdp-img').hide();

    os.on('enter', '#what-we-do', (element) => {
      setTimeout(function(){
        $('.what-we-do-list').fadeIn(800);
        $('.tdp-img').fadeIn(800);
      },600)
    });
    os.on('leave', '#what-we-do', (element) => {
        $('.what-we-do-list').fadeOut(800);
        $('.tdp-img').fadeOut(800);
    });

  }

  render() {
    return (
        <div className="what-we-do-list-wrapper">
          <a href="https://www.tampasdowntown.com">
          <img src="/portfolio/projects/tdpboth.png" className="img-responsive tdp-img" />
        </a>
        </div>
    );
  }
}
