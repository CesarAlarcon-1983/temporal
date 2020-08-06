import React from 'react';
import iconBack from '../../assets/images/icon-back.svg';
import iconHome from '../../assets/images/icon-home.svg';
import { NavContainer, BackButton, HomeButton } from './nav.styles';
import { useHistory } from 'react-router-dom';

export default function Wrapper(props) {
  const url = useHistory();

  return (
    <NavContainer>
      <BackButton
        onClick={() => {url.goBack()}}
      >
        <img src={iconBack} alt={'Back button'} />
      </BackButton>
      <HomeButton 
        onClick={() => {url.push('/')}}
      >
        <img src={iconHome} alt={'Home button'} />
      </HomeButton>
    </NavContainer>
  )
}