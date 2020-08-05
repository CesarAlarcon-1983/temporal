import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import video from '../../assets/videos/main.mp4';
import { ImageButton, ButtonList, SectionTitle } from './wine-type.styles';
import Nav from '../../components/nav/nav';
import red from '../../assets/images/red.jpg';
import white from '../../assets/images/white.jpg';
import rose from '../../assets/images/rose.jpg';
import sparkling from '../../assets/images/sparkling.jpg';

export default function WineType() {
  return (
    // <Wrapper image={pairingBg}>
    <Wrapper video={video}>
      <SectionTitle>{'Wine Type'}</SectionTitle>
      <ButtonList>
        <li>
          <ImageButton href={'/price-range'}>
            <img src={red} alt={'food choice'} />
            <span>Red</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/price-range'}>
            <img src={white} alt={'food choice'} />
            <span>White</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/price-range'}>
            <img src={sparkling} alt={'food choice'} />
            <span>Sparkling</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/price-range'}>
            <img src={rose} alt={'food choice'} />
            <span>Rose</span>
          </ImageButton>
        </li>
      </ButtonList>
      <Nav />
    </Wrapper>
  )
}