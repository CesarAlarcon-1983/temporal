import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { fadeInDown } from 'react-animations';

const fadeInButtons = keyframes`${fadeInUp}`;
const fadeInText = keyframes`${fadeInDown}`;

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

    &:first-child,
    &:nth-child(5) {
      img {
        height: auto;
        width: 100%;
        /* top: auto; */
        bottom: 0%;
      }
    }

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
    &:nth-child(5) {
      opacity: 0;
      animation: 1s 2.5s ${fadeInButtons} forwards;
    }

    &:nth-child(6) {
      opacity: 0;
      animation: 1s 2.8s ${fadeInButtons} forwards;
    }
  }
`;

const SectionTitle = styled.h1`
  opacity: 0;
  animation: 1s 1.1s ${fadeInText} forwards;
  font-size: 7.5vw;
  margin: 5vw 0 20vw;
`;

export { ButtonList, SectionTitle };