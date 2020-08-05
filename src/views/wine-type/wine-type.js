import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import video from '../../assets/videos/main.mp4';
import { ButtonList, SectionTitle } from './wine-type.styles';
import Nav from '../../components/nav/nav';
import red from '../../assets/images/red.jpg';
import white from '../../assets/images/white.jpg';
import rose from '../../assets/images/rose.jpg';
import sparkling from '../../assets/images/sparkling.jpg';
import ImageButton from '../../components/imageButton/imageButton';

export default function WineType() {
  const buttons = [
    {
      route:'/price-range',
      image:red,
      text:'Red'
    },
    {
      route:'/price-range',
      image:white,
      text:'White'
    },
    {
      route:'/price-range',
      image:sparkling,
      text:'Sparkling'
    },
    {
      route:'/price-range',
      image:rose,
      text:'Rose'
    }
  ];

  return (
    <Wrapper image={pairingBg} overlay overlayGradient={'top'} overlayColor={'rgba(0,0,0,1)'}>
      <SectionTitle>{'Wine Type'}</SectionTitle>
      <ButtonList>
        {
          buttons.map((button, index) => {
            return (
              <li key={index}>
                <ImageButton
                  route={button.route}
                  image={button.image}
                  text={button.text}
                />
              </li>
            );
          })
        }
      </ButtonList>
      <Nav />
    </Wrapper>
  )
}