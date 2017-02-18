import React, { Component } from 'react';


// Intro component
export default class Intro extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  centerText() {
    $(window).resize(function(){
      $('#intro-box').css({
         position:'absolute',
         left: ($(window).width() - $('#intro-box').outerWidth())/2,
         top: ($('#intro').height() - $('#intro-box').outerHeight())/2
       });
    });
  }
  componentDidMount(){
    $(window).on('scroll', function() {
    var y_scroll_pos = $(window).scrollTop();
    var scroll_pos_test = 10;

      if(y_scroll_pos >= scroll_pos_test) {
        $('#intro').css({
          'transition':'all .6s ease-in',
          'width':'100%',
        });
        $('#intro-box').css({
          'transition':'all .6s ease-in',
          'left':'95%',
        })

      }else if (y_scroll_pos < scroll_pos_test){
        $('#intro').css({
          'transition':'all .6s ease-in',
          'width':'50%',
          'overflow':'visible',
        });

      }

    });

      $('#intro-box').css({
         position:'absolute',
         left: ($(window).width() - $('#intro-box').outerWidth())/2,
         top: ($('#intro').height() - $('#intro-box').outerHeight())/2
       });

  }

  render() {
    this.centerText();
    return (
      <div id="intro" className="col-lg-12">
        <div id="intro-box" className="col-lg-6">
          <h1 className="intro-text">HE</h1>
            <br />
          <h1 className="intro-text">LLO.</h1>
        </div>
      </div>
    );
  }
}
