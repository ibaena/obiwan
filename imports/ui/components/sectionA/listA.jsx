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

    os.on('enter', '#what-we-do', (element) => {
      setTimeout(function(){
        $('.tdp-img').css({
          'transition':'all .4s ease-in',
          'opacity':'1'
        });
      },600)
    });
    os.on('leave', '#what-we-do', (element) => {
        $('.tdp-img').css({
          'transition':'all .4s ease-in',
          'opacity':'0'
        });
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
