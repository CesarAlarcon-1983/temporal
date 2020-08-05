import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from 'react-animations';
import { fadeInDown } from 'react-animations';

const fadeInButtons = keyframes`${fadeInUp}`;
const fadeInText = keyframes`${fadeInDown}`;

const mainColor = '#A50238';

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 80vw;
  padding: 0 5vw;
  position: relative;
  top: 10vw;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 4vw;
    color: #212121;
    opacity: 0;
    animation: 1s 1s ${fadeInText} forwards;
  }

  h1 {
    opacity: 0;
    margin: 3vw 0;
    font-size: 8vw;
    color: ${mainColor};
    animation: 1s 2s ${fadeInText} forwards;
  }
`;

const ActionsContainer = styled(motion.div)`
  text-align: center;
  
  a {
    margin-bottom: 3vw;
    min-width: 45vw;
    opacity: 0;

    &:nth-child(1) {
      animation: 1s 2s ${fadeInButtons} forwards;
    }
    &:nth-child(2) {
      animation: 1s 1.5s ${fadeInButtons} forwards;
    }
    &:nth-child(3) {
      animation: 1s 1s ${fadeInButtons} forwards;
    }
  }
`;

export {
  TextContainer,
  ActionsContainer
};