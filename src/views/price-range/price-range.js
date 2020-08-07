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
import { motion } from 'framer-motion';
import { wrapperTransitions, sliderTransitions } from './price-range.transitions';

export default function PriceRange() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    autoplay: false
  };
  const url = useHistory();
  
  const liAnimations = {
    hidden:{
      opacity: 0,
      x: '100vw',
    },
    show:{
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      }
    },
    exit:{
      x:'100vw',
      opacity: 0,
      transition: {
        duration: 1,
      }
    },
  }

  return (
    <motion.div
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper image={pairingBg} overlay overlayGradient={'top'} overlayColor={'rgba(0,0,0,1)'}>
        <SectionTitle>{'What is your desirable spending?'}</SectionTitle>
        <SectionSubtitle>{'Scroll to find your budget'}</SectionSubtitle>
        <WineSlider key={0} variants={liAnimations}>
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
        <WineSlider key={1} variants={liAnimations}>
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
        <WineSlider key={2} variants={liAnimations}>
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
    </motion.div>
  )
}