import React, { Component } from 'react';

import Menu from './menu.jsx';

// NAV component
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
        left: '35px',
        top: ($('.nav-wrapper').height() - $('#nav-btn').outerHeight())/2
      });
  }
  launchMenu() {
    let fired = false;
    let navItem = $('#menu-list').find('.menu-item');

    $('#nav-btn').on('click',function(){
      fired = !fired;
      $('#nav').toggleClass('nav-shrink nav-grow');
      $("body").toggleClass('show-scroll no-scroll');

      if (fired === true){
        $('#exit-nav').css({
          'transition':'all .4s ease-in',
          'opacity':'1',
          'display':'block'
        })
        $('#open-nav').css({
          'transition':'all .4s ease-in',
          'opacity':'1',
          'display':'none'
        })
        setTimeout(function(){
          navItem.css({
            'opacity': '1',
            'transition':'all .4s ease-in',
          })
        },400)
        $('#extra').css({
          'opacity': '1',
          'transition':'all .4s ease-in',
          'top':'0',
        })
        $('#more-info').css({
          'opacity': '1',
          'transition':'all .4s ease-in',
          'top':'0',
        })
        $('.blue').css({
          'opacity': '1',
          'transition':'all .1s ease-in',
          'right':'0',
          'width':'250px'
        })
      } else {
        $('#open-nav').css({
          'transition':'all .4s ease-in',
          'opacity':'1',
          'display':'block'
        })
        $('#exit-nav').css({
          'transition':'all .4s ease-in',
          'opacity':'1',
          'display':'none'
        })
        navItem.css({
          'opacity': '0',
          'transition':'all .4s ease-in',
        })
        $('#extra').css({
          'opacity': '0',
          'transition':'all .3s ease-in',
          'top':'30px',
        })
        $('#more-info').css({
          'opacity': '0',
          'transition':'all .3s ease-in',
          'top':'30px',
        })

        $('.blue').css({
          'opacity': '0',
          'transition':'all .2s ease-in',
          'right':'50px',
          'width':'10px;'
        })
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
        <div id="nav-btn">
          <span id="open-nav"><i className="fa fa-align-right" aria-hidden="true" id="right-align"></i>MENU</span>
          <span id="exit-nav">EXIT</span>
        </div>
        <div id="nav" className="container-fluid nav-shrink">
          <Menu />
          <div className="blue"></div>
        </div>
      </div>
    );
  }
}
