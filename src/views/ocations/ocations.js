import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import pairingBg from '../../assets/images/pairing.jpg';
import { ImageButton, ButtonList, SectionTitle } from './ocations.styles';
import Nav from '../../components/nav/nav';
import family from '../../assets/images/family.jpg';
import gift from '../../assets/images/gift.jpg';
import celebrations from '../../assets/images/celebrations.jpg';
import romantic from '../../assets/images/romantic.jpg';
import friends from '../../assets/images/friends.jpg';
import yourself from '../../assets/images/yourself.jpg';
import video from '../../assets/videos/main.mp4';

export default function Ocations() {
  return (
    <Wrapper video={video}>
      <SectionTitle>{'Occasions'}</SectionTitle>
      <ButtonList>
      <li>
          <ImageButton href={'/wine-type'}>
            <img src={family} alt={'food choice'} />
            <span>Family Vibes</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={gift} alt={'food choice'} />
            <span>Gift</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={celebrations} alt={'food choice'} />
            <span>Celebrations</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={romantic} alt={'food choice'} />
            <span>Romantic date</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={friends} alt={'food choice'} />
            <span>Friends & Social</span>
          </ImageButton>
        </li>
        <li>
          <ImageButton href={'/wine-type'}>
            <img src={yourself} alt={'food choice'} />
            <span>Enjoy with yourself</span>
          </ImageButton>
        </li>
      </ButtonList>
      <Nav backRoute={'/main'} />
    </Wrapper>
  )
}