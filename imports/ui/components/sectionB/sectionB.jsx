import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();



export default class SectionB extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){

  }

  render() {
    return (
      <div id="sectionB" className="col-lg-12">
        <div className="sectionB-header col-lg-10 col-lg-offset-2">
          <div className="col-lg-5">
            <span className="sb-header-text">ID</span>
            <br />
            <span className="sb-header-text">EA.</span>
          </div>
          <div className="col-lg-7" id="sb-paragraph">
            <div id="title-wrapper">
              <span id="sb-italic">INFLUENCER</span> <br />
              <span id="sb-para-title">MARKETING<span className="larger">.</span></span>
            </div>
            <div id="sb-para"> Influencer Marketing, unlike display ads or commercials, people choose to follow influencers because of their opinions on fashion, expertise in working out, or because their life is downright interesting. We leverage the relationship that influencers have with their following to share products and services that would interest them. What we don't do though is put the reputation of our influencers at risk. Our campaigns are designed to blend into our influencers daily lives; highlighting the product in the most authentic manner possible. We've coined this strategy: Lifestyle Marketing.</div>
          </div>
        </div>
        <div className="parrallax-media col-lg-5">

        </div>
      </div>
    );
  }
}
