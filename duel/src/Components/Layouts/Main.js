import React, { Component } from 'react';
import Landing from './Landing';
import Intro from './Intro';
import About from './About'
import Work from './Work'
import { Contact } from './Main.style';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Contact to="/">contact</Contact>
        <Landing />
        <Intro />
        <Work />
        <About />
      </div>
    );
  }
}
