import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();

import ListA  from './listA.jsx';

export default class SectionA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

    os.on('enter', '#what-we-do', (element) => {
      setTimeout(function(){
        $('.sectionA-header ').css({
          'transition':'all 1s ease-in',
          'opacity':'1',
          'right':'0',
          'visibility':'visible'
        });
        $('#sa-paragraph ').css({
          'transition':'all 1s ease-in',
          'opacity':'1',
          'right':'0',
          'visibility':'visible',
        });
      },400)
      setTimeout(function(){
        $('#what-we-do').css({
          'transition':'all .6s ease-in',
          'bottom':'25vh'
        });
      },600)
    });
    os.on('leave', '#what-we-do', (element) => {
      setTimeout(function(){
        $('.sectionA-header ').css({
          'transition':'all .8s ease-in',
          'opacity':'0',
          'right':'70%',
          'visibility':'hidden'
        });
        $('#sa-paragraph ').css({
          'transition':'all .8s ease-in',
          'opacity':'0',
          'right':'70%',
          'visibility':'hidden',
        });
      },400)
      setTimeout(function(){
        $('#what-we-do').css({
          'transition':'all .6s ease-in',
          'bottom':'-10vh'
        });
      },600)
    });
  }

  render() {
    return (
      <div id="sectionA" className="col-lg-12">
        <div className="sectionA-header col-lg-8 col-lg-offset-2">
          <span className="sa-header-text">TDP.</span>
          <br />
          <span className="sa-header-text"></span>
        </div>
        <div className="col-lg-3 col-lg-offset-2" id="sa-paragraph">
          <span id="sa-para-title">TAMPA DOWNTOWN PARTNERSHIP.</span>
          <p id="sa-para-content">
          Downtown Tampa has become a pinnacle for entertainment drawing in thousands of travelers every year to the city's various shops, restaurants and attractions. The Tampa Downtown Partnership is the leader in fostering vibrant, diverse, 24-hour downtown neighborhoods in which to learn, live, work and play.
            <br />
            My primary role in the project was to integrate the Google Maps API and create the 'Interactive Map'!
          </p>
        </div>
        <div id="what-we-do" className="col-lg-6 effect8">
          <ListA />
        </div>
      </div>
    );
  }
}
