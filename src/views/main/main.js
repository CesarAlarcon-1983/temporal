import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import video from '../../assets/videos/main2.mp4';
import Button from '../../components/button/button';
import {
  TextContainer,
  ActionsContainer
} from './main.styles';

export default function Main() {
  return (
    <Wrapper video={video} overlay overlayGradient={'bottom'} overlayColor={'rgba(255,255,255,1)'}>
      <TextContainer>
        <p>{'WELCOME'}</p>
        <h1>{'How can we help you?'}</h1>
      </TextContainer>
      <ActionsContainer>
        <Button label={'Scan your wine'} href={'/scan'} />
        <br />
        <Button label={'Food pairing'} href={'/food-pairing'} />
        <br />
        <Button label={'Ocations'} href={'/ocations'} />
      </ActionsContainer>
    </Wrapper>
  )
}