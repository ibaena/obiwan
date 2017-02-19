import React, { Component } from 'react';
import OnScreen from 'onscreen';
const os = new OnScreen();

// Intro component
export default class ListA extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  componentDidMount(){
    $('.what-we-do-list').hide();

    os.on('enter', '#what-we-do', (element) => {
      setTimeout(function(){
        $('.what-we-do-list').fadeIn(800);
      },600)
    });
    os.on('leave', '#what-we-do', (element) => {
        $('.what-we-do-list').fadeOut(800);
    });

  }

  render() {
    return (
        <div className="what-we-do-list-wrapper">
          <ul className="what-we-do-list col-lg-6">
            <h3 className="what-title">Design</h3>
            <li className="what-list-item">Web design</li>
            <li className="what-list-item">Art direction </li>
            <li className="what-list-item">Logo & branding</li>
            <li className="what-list-item">UI & UX </li>
          </ul>
          <ul className="what-we-do-list col-lg-6">
            <h3 className="what-title">Digital & Mobile</h3>
            <li className="what-list-item">Websites </li>
            <li className="what-list-item">Responsive design </li>
            <li className="what-list-item">Mobile & Tablet </li>
            <li className="what-list-item">Mobile apps (iOS, Android)</li>
          </ul>
          <ul className="what-we-do-list col-lg-6">
            <h3 className="what-title">Web Development</h3>
            <li className="what-list-item">Front end & Back end </li>
            <li className="what-list-item">Interaction design</li>
            <li className="what-list-item">Magento, Wordpress </li>
            <li className="what-list-item">Symfony, Laravel </li>
          </ul>
          <ul className="what-we-do-list col-lg-6">
            <h3 className="what-title">Social Media & Webmarketing</h3>
            <li className="what-list-item">Social Media Strategy </li>
            <li className="what-list-item">Community Management</li>
            <li className="what-list-item">Bloggers & influencers </li>
            <li className="what-list-item">Reporting, live events </li>
          </ul>
        </div>
    );
  }
}
