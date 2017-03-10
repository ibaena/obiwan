import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();



export default class SectionC extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    os.on('enter', '#sectionC-parrallax', (element) => {
      setTimeout(function(){
        $('#sectionC-parrallax').css({
          'transition':'all .6s ease-in',
          'height':'400px',
          'visibility':'visible',
          'opacity':'1'
        });
      },400)
    });
    os.on('leave', '#sectionC-parrallax', (element) => {
        $('#sectionC-parrallax').css({
          'transition':'all .3s ease-in',
          'height':'0',
          'visibility':'hidden',
          'opacity':'0'
        });
    });
  }

  render() {
    return (
      <div id="sectionC" className="col-lg-12">
        <div className="sectionC-header col-lg-10 col-lg-offset-2">
          <div className="col-lg-5" id="sc-title-wrapper">
            <span className="sc-header-text">CRE</span>
            <br />
            <span className="sc-header-text">ATE.</span>
          </div>
        </div>
        <div id="sectionC-parrallax"></div>
        <div className="col-lg-3 col-lg-offset-2" id="program-title">
          <a href="http://wine4food.com" target="_blank" id="wine-link">
          <span>WINE </span>
          <br /><br />
          <span>
            <span className="italic">4 </span>
            Food.
          </span>
        </a>
        </div>
        <div className="col-lg-3" id="sc-para-1">
          Wine4Food.com is the editorial arm of Golden Ram Imports. Wine4Food shares the stories behind our wines, the makers, the vineyards, and what makes them special.
        </div>
        <div className="col-lg-3" id="sc-para-2" >
          For this project I contributed in all phases of the project from design to launch. I was on a team with one other developer.
        </div>

      </div>
    );
  }
}
