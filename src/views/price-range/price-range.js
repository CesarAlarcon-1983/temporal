import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import {
  SectionTitle,
  SectionSubtitle,
  WineSlider,
  WineSliderHeading,
  Label,
  Line,
  WineSliderTrack,
  WineElement
} from './price-range.styles';
import pairingBg from '../../assets/images/pairing.jpg';
import wineBottle from '../../assets/images/wine-bottle.png';
import Nav from '../../components/nav/nav';

export default function PriceRange() {
  return (
    <Wrapper image={pairingBg}>
      <SectionTitle>{'What is your desirable spending?'}</SectionTitle>
      <SectionSubtitle>{'Scroll to find your budget'}</SectionSubtitle>
      <WineSlider>
        <WineSliderHeading>
          <Label>Low (5 - 20)</Label>
          <Line></Line>
        </WineSliderHeading>
        <WineSliderTrack>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
        </WineSliderTrack>
      </WineSlider>
      <WineSlider>
        <WineSliderHeading>
          <Label>Medium (20 - 50)</Label>
          <Line></Line>
        </WineSliderHeading>
        <WineSliderTrack>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
        </WineSliderTrack>
      </WineSlider>
      <WineSlider>
        <WineSliderHeading>
          <Label>High (50 - 100)</Label>
          <Line></Line>
        </WineSliderHeading>
        <WineSliderTrack>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
          <WineElement href={'/wine-detail'}>
            <img src={wineBottle} alt={'Wine Bottle'} />
          </WineElement>
        </WineSliderTrack>
      </WineSlider>
      <Nav backRoute={'/wine-type'} />
    </Wrapper>
  )
}