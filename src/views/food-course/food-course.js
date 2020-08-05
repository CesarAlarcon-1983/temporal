import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import food1 from '../../assets/images/food1.jpg';
import food2 from '../../assets/images/food2.jpg';
import food3 from '../../assets/images/food3.jpg';
import food4 from '../../assets/images/food4.jpg';
import food5 from '../../assets/images/food5.jpg';
import food6 from '../../assets/images/food6.jpg';
import { ImageButton, ButtonList, SectionTitle } from './food-course.styles';
import Nav from '../../components/nav/nav';
import video from '../../assets/videos/main.mp4';

export default function FoodCourse() {
  return (
    // <Wrapper image={pairingBg}>
    <Wrapper video={video}>
      <SectionTitle>{'Choose your main course'}</SectionTitle>
      <ButtonList>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food1} alt={'food choice'} />
            <span>Braai & Meat</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food2} alt={'food choice'} />
            <span>Cheese</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food3} alt={'food choice'} />
            <span>Sea Food</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food4} alt={'food choice'} />
            <span>Pasta</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food5} alt={'food choice'} />
            <span>Spicy</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={food6} alt={'food choice'} />
            <span>Pizza</span>
          </ImageButton>
        </li>
      </ButtonList>
      <Nav backRoute={'/main'} />
    </Wrapper>
  )
}