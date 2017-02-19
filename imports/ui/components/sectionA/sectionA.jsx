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
        $('#what-we-do').css({
          'transition':'all .6s ease-in',
          'bottom':'20vh'
        });
      },700)
    });
    os.on('leave', '#what-we-do', (element) => {
      setTimeout(function(){
        $('#what-we-do').css({
          'transition':'all .6s ease-in',
          'bottom':'2vh'
        });
      },700)
    });
  }

  render() {
    return (
      <div id="sectionA" className="col-lg-12">
        <div className="sectionA-header col-lg-8 col-lg-offset-2">
          <span className="sa-header-text">DIGI</span>
          <br />
          <span className="sa-header-text">TAL.</span>
        </div>
        <div className="col-lg-3 col-lg-offset-2" id="sa-paragraph">
          <span id="sa-para-title">THE INTERNET IS A BIG PLACE.</span>
          <p id="sa-para-content">
            We help brands communicate through more platforms to reach more people. Ockupy is a full-service marketing agency specializing in digital creatives that spread messages to the far reaches of the internet community.
          </p>
        </div>
        <div id="what-we-do" className="col-lg-6 ">
          <ListA />
        </div>
      </div>
    );
  }
}
