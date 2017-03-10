import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();



export default class SectionB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    os.on('enter', '.parrallax-media', (element) => {
      setTimeout(function(){
        $('.parrallax-media').css({
          'transition':'all .6s ease-in',
          'width':'45%',
          'opacity':'1'
        });
      },600)
    });
    os.on('leave', '.parrallax-media', (element) => {
        $('.parrallax-media').css({
          'transition':'all .6s ease-in',
          'width':'0%',
          'opacity':'0.01'
        });
    });
    os.on('enter','.sectionB-header', (element) => {
      setTimeout(function(){
        $('#sb-title-wrapper').css({
          'transition':'all .6s ease-in',
          'opacity':'1',
          'top':'0',
          'visibility':'visible'
        })
      },400);
    });
    os.on('leave','.sectionB-header', (element) => {
        $('#sb-title-wrapper').css({
          'transition':'all .4s ease-in',
          'opacity':'0.01',
          'top':'300px',
          'visibility':'hidden'
        })
    });
  }

  render() {
    return (
      <div id="sectionB" className="col-lg-12">
        <div className="sectionB-header col-lg-10 col-lg-offset-2">
          <div className="col-lg-5" id="sb-title-wrapper">
            <span className="sb-header-text">ID</span>
            <br />
            <span className="sb-header-text">EA.</span>
          </div>
          <div className="col-lg-7" id="sb-paragraph">
            <div id="title-wrapper">
              <span id="sb-italic">McCaffreys</span> <br />
              <span id="sb-para-title">Food Stores<span className="larger">.</span></span>
            </div>
            <div id="sb-para"> Built on a reputation of exceptional customer service, the highest quality fresh food brought to your table and an unsurpassable commitment to the communities in which we do business
              I worked on the front end of the project with another developer and a web designer.
            </div>
          </div>
        </div>
        <a href="http://mccaffreys.com" target="_blank">
          <div className="parrallax-media col-lg-5">
          </div>
        </a>
      </div>
    );
  }
}
