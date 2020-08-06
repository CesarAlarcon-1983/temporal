import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { fadeInDown } from 'react-animations';

const fadeInButtons = keyframes`${fadeInUp}`;
const fadeInText = keyframes`${fadeInDown}`;

const ImageButton = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 2vw;
  background: #000;
  position: relative;
  width: 65%;
  height: 0;
  padding-bottom: 50%;

  &:after{
    content: '';
    position: absolute;
    top:0 ;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.9), transparent 50%);
    z-index: 5;
  }

  img {
    opacity:1;
    width: 100%;
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
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: space-between;

  li {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vw;

    &:nth-child(1) {
      opacity: 0;
      animation: 1s 1.3s ${fadeInButtons} forwards;
    }

    &:nth-child(2) {
      opacity: 0;
      animation: 1s 1.6s ${fadeInButtons} forwards;
    }
    &:nth-child(3) {
      opacity: 0;
      animation: 1s 1.9s ${fadeInButtons} forwards;
    }
    &:nth-child(4) {
      opacity: 0;
      animation: 1s 2.2s ${fadeInButtons} forwards;
    }
  }
`;

const SectionTitle = styled.h1`
  opacity: 0;
  animation: 1s 1.1s ${fadeInText} forwards;
  font-size: 7.5vw;
  margin: 5vw 0 20vw;
`;

export { ImageButton, ButtonList, SectionTitle };