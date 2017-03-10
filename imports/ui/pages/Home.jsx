import React, { Component } from 'react';

import Header from '../../ui/components/header/header.jsx';
import Box from '../../ui/components/box/box.jsx';
import Nav from '../../ui/components/nav/nav.jsx';


// This component - represents a single page
export const Home = () =>
  <div id="home" className="container-fluid">
    <div id="top-white" className="col-lg-12">
      <a href="/" id="brand">
        <img src="/portfolio/ivan-logo.png" className="img-responsive" id="logo" />
      </a>
    </div>
    <div className="social-bar" id="left-white">
      <ul id="social-list">
        <li className="social-list-item"><a href="#" className="social-links"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li className="social-list-item"><a href="#" className="social-links"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
        <li className="social-list-item"><a href="#" className="social-links"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      </ul>
    </div>
    <div id="white"></div>
    <Nav />
    <Box />
  </div>
