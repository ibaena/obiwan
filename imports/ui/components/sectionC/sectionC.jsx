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
          'transition':'all .5s ease-in',
          'height':'400px',
          'visibility':'visible',
        });
      },400)
    });
    os.on('leave', '#sectionC-parrallax', (element) => {
        $('#sectionC-parrallax').css({
          'transition':'all .4s ease-in',
          'height':'0',
          'visibility':'hidden',
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
          <span>Influencers &</span>
          <br /><br />
          <span>
            <span className="italic">Lifestyle </span>
            Marketing.
          </span>
        </div>
        <div className="col-lg-3" id="sc-para-1">
          Our new platform allows influencers to pick and choose the campaigns they want to join. We want our influencers to stay true to their following, so we give them the freedom to promote brands they want to or already support - and, best of all, get paid for it.
        </div>
        <div className="col-lg-3" id="sc-para-2" >
          Matching rich and authentic content with social media’s most followed figures. When compared to other forms of digital advertising, influencer campaigns drive 11x more ROI.
        </div>

      </div>
    );
  }
}
