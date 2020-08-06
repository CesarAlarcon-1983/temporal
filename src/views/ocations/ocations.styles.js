import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { fadeInDown } from 'react-animations';

const fadeInButtons = keyframes`${fadeInUp}`;
const fadeInText = keyframes`${fadeInDown}`;

const ImageButton = styled.a`
  display: flex;
  overflow: hidden;
  border-radius: 2vw;
  background: #000;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 75%;

  &:after{
    content: '';
    position: absolute;
    top:0 ;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.8), transparent 60%);
    z-index: 5;
  }

  img {
    opacity:1;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
  }

  span {
    position: absolute;
    font-family: 'DM Serif Display', serif;
    font-size: 4vw;
    color: #fff;
    bottom: 10%;
    left: 10%;
    z-index: 10;
  }
`;


const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;

  li {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12vw;

    &:nth-child(even) {
      img {
        width: 100%;
        height: auto;
        top:50%;
        transform: translateY(-50%);
      }
    }

    /* &:nth-child(1) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out .5s forwards;
    }
    
    &:nth-child(2) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out .8s forwards;
    }
    
    &:nth-child(3) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out 1.1s forwards;
    }
    
    &:nth-child(4) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out 1.4s forwards;
    }

    &:nth-child(5) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out 1.7s forwards;
    }

    &:nth-child(6) {
      opacity: 0;
      animation: ${fadeInButtons} 1s ease-out 2s forwards;
    } */
  }
`;

const SectionTitle = styled.h1`
  font-size: 8vw;
  margin: 0 0 10vw;
`;

export { ImageButton, ButtonList, SectionTitle };