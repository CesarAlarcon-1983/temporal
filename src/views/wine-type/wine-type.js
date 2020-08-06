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
import { motion } from 'framer-motion';
import { wrapperTransitions } from '../../components/utils/router.transition';

export default function WineType() {
  const buttons = [
    {
      route:'/price-range',
      image:red,
      text:'Red',
      direction: 'vertical'
    },
    {
      route:'/price-range',
      image:white,
      text:'White',
      direction: 'vertical'
    },
    {
      route:'/price-range',
      image:sparkling,
      text:'Sparkling',
      direction: 'vertical'
    },
    {
      route:'/price-range',
      image:rose,
      text:'Rose',
      direction: 'vertical'
    }
  ];

  return (
    <motion.div
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
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
                    direction={button.direction}
                  />
                </li>
              );
            })
          }
        </ButtonList>
        <Nav />
      </Wrapper>
    </motion.div>
  )
}