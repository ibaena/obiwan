import React, { Component } from 'react';


// Intro component
export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $('#nav').hide();

    $('#activate').on('click', function() {
      console.log("message");

      $('#nav').animate({width:'toggle'},400);
    });
  }

  render() {
    return (
      <div id="header" className="container-fluid">
        <div id="activate">X</div>
        <nav id="nav">
          nav
        </nav>
      </div>
    );
  }
}
