import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import {
  SectionTitle,
  SectionSubtitle,
  WineSlider,
  WineSliderHeading,
  Label,
  Line,
  WineElement,
  ArrowNext,
  ArrowPrev
} from './price-range.styles';
import pairingBg from '../../assets/images/pairing.jpg';
import wineBottle from '../../assets/images/wine-bottle.png';
import Nav from '../../components/nav/nav';
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';

export default function PriceRange() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />
  };
  const url = useHistory();
  
  return (
    <Wrapper image={pairingBg} overlay overlayGradient={'top'} overlayColor={'rgba(0,0,0,1)'}>
      <SectionTitle>{'What is your desirable spending?'}</SectionTitle>
      <SectionSubtitle>{'Scroll to find your budget'}</SectionSubtitle>
      <WineSlider>
        <WineSliderHeading>
          <Label>Low (5 - 20)</Label>
          <Line></Line>
        </WineSliderHeading>
        <Slider {...sliderSettings}>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
        </Slider>
      </WineSlider>
      <WineSlider>
        <WineSliderHeading>
          <Label>Medium (20 - 50)</Label>
          <Line></Line>
        </WineSliderHeading>
        <Slider {...sliderSettings}>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
        </Slider>
      </WineSlider>
      <WineSlider>
        <WineSliderHeading>
          <Label>High (50 - 100)</Label>
          <Line></Line>
        </WineSliderHeading>
        <Slider {...sliderSettings}>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
          <div>
            <WineElement onClick={() => url.push('/wine-detail')}>
              <img src={wineBottle} alt={'Wine Bottle'} />
            </WineElement>
          </div>
        </Slider>
      </WineSlider>
      <Nav backRoute={'/wine-type'} />
    </Wrapper>
  )
}