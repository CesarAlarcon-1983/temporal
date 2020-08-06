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
import { wrapperTransitions } from '../../components/utils/router.transition';

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
        <Nav backRoute={'/main'} />
      </Wrapper>
    </motion.div>
  )
}