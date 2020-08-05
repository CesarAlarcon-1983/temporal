import styled, { keyframes } from 'styled-components';
import { motion } from  'framer-motion';
import { fadeInDownBig, fadeInUpBig } from 'react-animations';

const fadeInDown = keyframes`${fadeInDownBig}`;
const fadeInUp = keyframes`${fadeInUpBig}`;

const IntroContent = styled(motion.div)`
  text-align: center;
  position: relative;
  top: 50%; 
  left: 50%;
  transform: translate3d(-50%,-50%,0);

  &:after,
  &:before {
    content: '';
    height: 20vw;
    width: 4px;
    background: #fff;
    position: absolute;
    left: calc(50% - 4px);
  }

  &:before{
    animation: 1s 1s ${fadeInDown};
    bottom: 120%;
  }

  &:after{
    top: 120%;
    animation: 1s 1s ${fadeInUp};
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 4vw;
  }

  h1 {
    margin: 3vw 0;
    font-size: 9vw;
  }
`;

export { IntroContent };