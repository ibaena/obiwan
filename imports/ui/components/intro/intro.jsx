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
       $('#intro-box-left').css({
          position:'absolute',
          top: ($('#intro').height() - $('#intro-box-left').outerHeight())/2
        });
    });
  }
  componentDidMount(){
    $('#intro-box-left').hide();

    let center = ($(window).width() - $('#intro-box').outerWidth())/2;
    $('#intro-box').css({
       position:'absolute',
       left: ($(window).width() - $('#intro-box').outerWidth())/2,
       top: ($('#intro').height() - $('#intro-box').outerHeight())/2
     });
     $('#intro-box-left').css({
        position:'absolute',
        top: ($('#intro').height() - $('#intro-box-left').outerHeight())/2
      });
    var fired = 0;

    $(window).on('scroll', function() {
    var y_scroll_pos = $(window).scrollTop();
    var scroll_pos_test = 5;

      if(y_scroll_pos > scroll_pos_test) {
        if(fired === 0){


        $('#intro').css({
          'transition':'all .6s ease-in',
          'width':'100%',
        });
        $('#intro-box').css({
          'transition':'all .7s ease-in',
          'left': '0%',
        })
        setTimeout(function(){
          $('#intro-box-left').show('slide',{direction:'right'},400);
        },650)
      }
        fired = 1;
      }else if (y_scroll_pos <= scroll_pos_test){

        if(fired === 1){

          $('#intro').css({
            'transition':'all .6s ease-in',
            'width':'50%',
          });
            $('#intro-box').css({
              'transition':'all .6s ease-in',
              'position':'absolute',
              'left': center,
              'top': ($('#intro').height() - $('#intro-box').outerHeight())/2
            })
            $('#intro-box-left').hide('slide',{direction:'right'},400);
        }
        fired = 0;
      }

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
        <div id="intro-box-left" className="col-lg-6">
          <h2 id="intro-left-title">Reach A Larger Audience</h2>
          <hr id="left-break" />
          <p id="intro-left-text">Ockupy A Larger Market</p>
        </div>
      </div>
    );
  }
}
