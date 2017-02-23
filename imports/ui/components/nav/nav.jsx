import React, { Component } from 'react';


// Intro component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerNav() {
    $('#nav').css({
       position:'fixed',
       left: '5%',
       top: ($('#home').height() - $('#nav').outerHeight())/2
     });
     $('#nav-btn').css({
        position:'fixed',
        left: '50px',
        top: ($('#home').height() - $('#nav-btn').outerHeight())/2
      });
  }
  launchMenu() {
    $('#nav-btn').on('click',function(){
      $('#nav').toggleClass('nav-shrink nav-grow');

    })
  }

  componentDidMount(){
    this.centerNav();
    this.launchMenu();

  }

  render() {
    return (
      <div className="nav-wrapper">
        <div id="nav-btn">MENU</div>
        <div id="nav" className="container-fluid nav-shrink">

        </div>
      </div>
    );
  }
}