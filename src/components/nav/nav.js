import React from 'react';
import iconBack from '../../assets/images/icon-back.svg';
import iconHome from '../../assets/images/icon-home.svg';
import { NavContainer, BackButton, HomeButton } from './nav.styles';

export default function Wrapper(props) {
  const { backRoute } = props;
  return (
    <NavContainer>
      <BackButton
        href={backRoute}
        onClick={() => {
          !backRoute && window.history.back();
        }}
      >
        <img src={iconBack} alt={'Back button'} />
      </BackButton>
      <HomeButton href={'/'}>
        <img src={iconHome} alt={'Home button'} />
      </HomeButton>
    </NavContainer>
  )
}