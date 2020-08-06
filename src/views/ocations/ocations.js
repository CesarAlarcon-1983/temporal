import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import { ButtonList, SectionTitle } from './ocations.styles';
import ImageButton from '../../components/imageButton/imageButton';
import Nav from '../../components/nav/nav';
import family from '../../assets/images/family.jpg';
import gift from '../../assets/images/gift.jpg';
import celebrations from '../../assets/images/celebrations.jpg';
import romantic from '../../assets/images/romantic.jpg';
import friends from '../../assets/images/friends.jpg';
import yourself from '../../assets/images/yourself.jpg';
import video from '../../assets/videos/main.mp4';
import { motion } from 'framer-motion';
import { wrapperTransitions, textTransitions } from './ocations.transitions';

export default function Ocations() {

  const buttons = [
    {
      route:'/wine-type',
      image:family,
      text:'Family Vibes'
    },
    {
      route:'/wine-type',
      image:gift,
      text:'Gift'
    },
    {
      route:'/wine-type',
      image:celebrations,
      text:'Celebrations'
    },
    {
      route:'/wine-type',
      image:romantic,
      text:'Romantic Date'
    },
    {
      route:'/wine-type',
      image:friends,
      text:'Friends & Social'
    },
    {
      route:'/wine-type',
      image:yourself,
      text:'Enjoy with yourself'
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
        <SectionTitle>{'Occasions'}</SectionTitle>
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
                  />
                </motion.li>
              );
            })
          }
        </ButtonList>
        <Nav backRoute={'/main'} />
      </Wrapper>
    </motion.div>
  )
}