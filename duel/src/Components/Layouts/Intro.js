import React, { Component } from 'react';

import { LandingWrapper, IntroHeader, IntroTextWrapper, LeftLine, RightLine, TopLine } from './Main.style.js';

export default class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <TopLine left="-4rem" width="calc(100% + 9rem)" top="6rem" />
        <LeftLine height="80%" top="0"/>
        <IntroHeader>
          <img src={require('../../assets/HeaderIntro.svg')} />
          <IntroTextWrapper>
            <p>
              Hi, we’re a collective of freelance web developers and designers,
              working together across the UK, Gaza and Germany. We work with
              charities, not-for-profits, start ups and businesses, creating
              digital solutions with an emphasis on driving positive social
              impact through everything we do.{' '}
              <p>
                So whether you're looking for a new website, an app, UX design,
                workshops or anything similar, drop us an email and we can chat.
              </p>
            </p>
          </IntroTextWrapper>
        </IntroHeader>
        <RightLine bottom="0" height="8rem" right="8rem"/>
      </LandingWrapper>
    );
  }
}
