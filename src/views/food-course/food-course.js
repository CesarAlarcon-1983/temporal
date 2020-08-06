import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import food1 from '../../assets/images/food1.jpg';
import food2 from '../../assets/images/food2.jpg';
import food3 from '../../assets/images/food3.jpg';
import food4 from '../../assets/images/food4.jpg';
import food5 from '../../assets/images/food5.jpg';
import food6 from '../../assets/images/food6.jpg';
import { ButtonList, SectionTitle } from './food-course.styles';
import Nav from '../../components/nav/nav';
import ImageButton from '../../components/imageButton/imageButton';
import video from '../../assets/videos/main.mp4';
import { motion } from 'framer-motion';
import { wrapperTransitions, textTransitions } from './food-course.transitions';


export default function FoodCourse() {

  const buttons = [
    {
      route:'/wine-type',
      image:food1,
      text:'Braai & Meat'
    },
    {
      route:'/cheese-type',
      image:food2,
      text:'Cheese'
    },
    {
      route:'/wine-type',
      image:food3,
      text:'Sea Food'
    },
    {
      route:'/wine-type',
      image:food4,
      text:'Pasta'
    },
    {
      route:'/wine-type',
      image:food5,
      text:'Spicy'
    },
    {
      route:'/wine-type',
      image:food6,
      text:'Pizza'
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
        <SectionTitle key={'a'} variants={textTransitions}>{'Choose your main course'}</SectionTitle>
        <ButtonList>
          {
            buttons.map((button, index) => {
              return (
                <motion.li
                  variants={liAnimations}
                  key={index}>
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