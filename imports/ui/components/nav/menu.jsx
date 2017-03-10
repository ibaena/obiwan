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
       top: '10em'
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
    { _id: 1, name:'', src:'', main:''},
    { _id: 2, name:'INTRO.', src:'', main:'I’M A WEB DEVELOPER   from Pennsylvania living in Hoboken, New Jesery, where I work as a Front End Developer at Vision Creative Group.'},
    { _id: 3, name:'EXTRA.', src:'' , main:'If you want to know more about me, my work or if youʼre an Elder Scrolls Skyrim or want to talk Knicks basketball, feel free to contact me.'},
    { _id: 4, name:'GITHUB.', src:'https://github.com/ibaena', main:''},
    { _id: 5, name:'CODEPEN.', src:'/jobs', main:''},
  ];
}
renderMenu() {
  return this.getMenu().map((item) => (
    <li className="menu-item " key={item._id}>
      <a className="menu-item-link" href={item.src} >
        {item.name}
      </a>
      <p className="menu-text">{item.main}</p>
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
          <a href="https://www.google.com/maps/place/Hoboken,+NJ/@40.7456804,-74.030902,14z/data=!4m5!3m4!1s0x89c257608d1533d1:0x44b6ca6a1137bf87!8m2!3d40.7439905!4d-74.0323626" target="_blank" id="address">Greater New York City</a> <br />
          <b><a href="tel:1-646-883-6584" id="telephone"></a>
          <a href= "mailto:contact@ockupy.com" id="email">ivam.baena[at]gmail[dot]com</a></b>
        </div>
        <div id="extra" className="col-md-12">
          <i>Want to work with us ?</i><br/>
          <h4 className="cs-font-header"><i className="fa fa-long-arrow-right" aria-hidden="true" id="thin-arrow"></i>BRIEF US.</h4>
        </div>
      </div>
    );
  }
}
