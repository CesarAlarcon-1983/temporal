import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Button from '../../components/button/button';
import video from '../../assets/videos/intro.mp4';
import { IntroContent } from './intro.styles';

export default function Intro() {
  return (
    <Wrapper video={video} overlayColor={'rgba(0,0,0,.2)'}>
      <IntroContent>
        <p>{'EXPERIENCE'}</p>
        <h1>{'Wine guru'}</h1>
        <Button label={'Touch to Start'} href={'/main'} />
      </IntroContent>
    </Wrapper>
  )
}