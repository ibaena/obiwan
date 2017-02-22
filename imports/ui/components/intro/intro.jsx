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
    //$('#intro-box-left').hide();
    $('.scroll-bounce-left').hide();
    $('.scroll-bounce-right').hide();

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
          'left': '5%',
        })
        setTimeout(function(){
          $('#intro-box-left').css({
             'transition':'all .3s ease-in',
             'left':'35%',
             'visibility':'visible',
             'opacity':'1'
           });
        },600)
        $('.scroll-bounce').slideUp(500);
        $('.scroll-bounce-left').slideDown(400);
        $('.scroll-bounce-right').slideDown(400);
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
            $('#intro-box-left').css({
               'transition':'all .2s ease-in',
               'left':'50%',
               'visibility':'hidden',
               'opacity':'0'
             });
            $('.scroll-bounce').slideDown(500);
            $('.scroll-bounce-left').slideUp(400);
            $('.scroll-bounce-right').slideUp(400);
        }
        fired = 0;
      }

    });
    $('a[href^="#"]').on('click', function(event) {
      let target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
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
        <div className="scroll-bounce"> <i className="fa fa-long-arrow-left animated bounce" id="intro-arrow" aria-hidden="true"></i>scroll</div>
        <div className="scroll-bounce-left"> <i className="fa fa-long-arrow-left animated bounce" id="intro-arrow" aria-hidden="true"></i>scroll</div>
        <div className="scroll-bounce-right"> <a href="#home"><i className="fa fa-long-arrow-left animated bounce" id="intro-arrow" aria-hidden="true"></i>top</a></div>
      </div>
    );
  }
}
