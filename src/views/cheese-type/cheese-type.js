import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import video from '../../assets/videos/main.mp4';
import { ButtonList, SectionTitle } from './cheese-type.styles';
import Nav from '../../components/nav/nav';
import strong from '../../assets/images/strong.jpg';
import medium from '../../assets/images/medium.jpg';
import mild from '../../assets/images/mild.jpg';
import brave from '../../assets/images/brave.jpg';
import ImageButton from '../../components/imageButton/imageButton';
import { wrapperTransitions } from '../../components/utils/router.transition';
import { motion } from 'framer-motion';

export default function CheeseType() {
  const buttons = [
    {
      route:'/wine-type',
      image:strong,
      text:'Strong'
    },
    {
      route:'/wine-type',
      image:medium,
      text:'Medium'
    },
    {
      route:'/wine-type',
      image:mild,
      text:'Mild'
    },
    {
      route:'/wine-type',
      image:brave,
      text:'Brave'
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
        <SectionTitle>{'Cheese pairing'}</SectionTitle>
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
    </motion.div>
  )
}