import React, { Component } from 'react';


export default class Menu extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerMenu(){
    $('#menu').css({
       position:'absolute',
       left:'200px',
       top: ($('.nav-wrapper').height() - $('#menu').outerHeight())/2
     });
  }
  hoverArrow(){
    $('.cs-font-header').on('mouseover', function(){
      $('#thin-arrow').css({
        'transition':'all .2s ease-in',
        'right':'20px',
      })
    })
    $('.cs-font-header').on('mouseleave', function(){
      $('#thin-arrow').css({
        'transition':'all .2s ease-in',
        'right':'50px',
      })
    })
  }

  componentDidMount(){
    this.centerMenu();
    this.hoverArrow();

  }
  getMenu() {
  return [
    { _id: 1, name:'Agency', src:'/'},
    { _id: 2, name:'Values', src:'/work'},
    { _id: 3, name:'Studio', src:'/studio'},
    { _id: 4, name:'Projects', src:'/projects'},
    { _id: 5, name:'Jobs', src:'/jobs'},
  ];
}
renderMenu() {
  return this.getMenu().map((item) => (
    <li className="menu-item " key={item._id}>
      <a className="menu-item-link" href={item.src} >
        {item.name}<span>.</span>
      </a>
    </li>
  ))
}

  render() {
    return (
      <div id="menu" className="col-lg-10">
        <ul id="menu-list" className="col-md-12">
          {this.renderMenu()}
        </ul>
        <div id="more-info" className="col-md-12">
          <a href="https://www.google.com/maps/place/115+River+Rd+%23151,+Edgewater,+NJ+07020/@40.805273,-73.9937097,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f7d1d1ad4a8f:0xbc3ac98fccfd168a!8m2!3d40.805273!4d-73.991521" target="_blank" id="address">115 River Rd #151, Edgewater, NJ 07020</a> <br />
          <b><a href="tel:1-646-883-6584" id="telephone">(646) 883-6584</a> <br />
          <a href= "mailto:contact@ockupy.com" id="email">contact@ockupy.com</a></b>
        </div>
        <div id="extra" className="col-md-12">
          <i>Want to work with us ?</i><br/>
          <h4 className="cs-font-header"><i className="fa fa-long-arrow-right" aria-hidden="true" id="thin-arrow"></i>BRIEF US.</h4>
        </div>
      </div>
    );
  }
}
