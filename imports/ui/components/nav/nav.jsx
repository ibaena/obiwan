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
       top: ($('.nav-wrapper').height() - $('#nav').outerHeight())/2
     });
     $('#nav-btn').css({
        position:'fixed',
        left: '50px',
        top: ($('.nav-wrapper').height() - $('#nav-btn').outerHeight())/2
      });
  }
  launchMenu() {
    let fired = false;
    $('#nav-btn').on('click',function(){
      fired = !fired;
      $('#nav').toggleClass('nav-shrink nav-grow');
      $("body").toggleClass('show-scroll no-scroll');

      if (fired === true){

        $('.blue').css({
          'opacity': '1',
          'transition':'all .1s ease-in',
          'right':'0',
          'width':'250px'
        })
      } else {

        $('.blue').css({
          'opacity': '0',
          'transition':'all .2s ease-in',
          'right':'50px',
          'width':'10px;'
        })
        setTimeout(function(){
          $('#home').css({
            'height':'inherit',
          })
        },400)
      }

    })
  }
  hoverMenu(){
    $('#nav-btn').on('mouseover', function(){
      $('.nav-wrapper').css({
        'transition':'all .1s ease-in',
        'width':'7vw',
      })
    })
    $('#nav-btn').on('mouseleave', function(){
      $('.nav-wrapper').css({
        'transition':'all .1s ease-in',
        'width':'5vw',
      })
    })
  }
  componentDidMount(){
    $('body').addClass('show-scroll');
    this.centerNav();
    this.launchMenu();
    this.hoverMenu();

  }

  render() {
    return (
      <div className="nav-wrapper">
        <div id="nav-btn">MENU</div>
        <div id="nav" className="container-fluid nav-shrink">
          <div className="blue"></div>
        </div>
      </div>
    );
  }
}
