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
import { wrapperTransitions, textTransitions } from './wine-type.transitions';

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

  const liAnimations = {
    hidden:{
      opacity: 0,
      y: -100,
    },
    show:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
    },
    exit:{
      y:-100,
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
        <SectionTitle 
          variants={textTransitions}
        >{'Wine Type'}</SectionTitle>
        <ButtonList>
          {
            buttons.map((button, index) => {
              return (
                <motion.li 
                  variants={liAnimations}
                  key={index}
                >
                  <ImageButton
                    route={button.route}
                    image={button.image}
                    text={button.text}
                    direction={button.direction}
                  />
                </motion.li>
              );
            })
          }
        </ButtonList>
        <Nav />
      </Wrapper>
    </motion.div>
  )
}