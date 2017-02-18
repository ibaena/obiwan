import React, { Component } from 'react';

import Intro from '../intro/intro.jsx';
import Empire from '../intro/empire.jsx';

// Intro component
export default class Box extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerBox() {
    $('#box').css({
       position:'absolute',
       left: ($(window).width() - $('#box').outerWidth())/2,
       top: ($('#home').height() - $('#box').outerHeight())/2
     });
  }
  componentDidMount(){

  }

  render() {
    this.centerBox();
    return (
      <div id="box" className="container-fluid">
        <Intro />
        <Empire />
      </div>
    );
  }
}
