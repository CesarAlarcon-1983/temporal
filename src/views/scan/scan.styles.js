import styled, { keyframes } from 'styled-components';

const scanAnimation = keyframes`
  0% {
    top: 0;
  }
  35% {
    top: 60%;
  }
  40% {
    top: 75%;
  }
  50% {
    top: 96%;
  }
  60% {
    top: 96%;
  }
  70% {
    top: 45%;
  }
  90% {
    top: 35%;
  }
  100% {
    top: 0;
  }
`;

const visualCue = keyframes`
  0% {
    transform: translateY(0);
    opacity: .3;
  }
  100% {
    transform: translateY(20%);
    opacity: 1;
  }
`

const mainColor = '#A50238';

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  top: 10vw;
  color: ${mainColor};
  font-size: 8vw;
  text-align: center;
`;

const ScanIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate3d(-50%, -50%, 0);
  width: 40vw;

  img {
    width: 100%;
    position: relative;
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top:.5vw;
    left:.5vw;
    right:.5vw;
    bottom:.5vw;
    background: rgba(255,255,255,.5);
    border-radius: 2vw;
  }

  &:after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 0.5vw;
    background: #fff;
    animation: ${scanAnimation} 2.5s linear 0.5s infinite;
  }
`;

const ScanVisualCue = styled.div`
  position: absolute;
  left:calc(50% - 4vw);
  top: 70%;
  width: 8vw;
  border: .5vw solid #fff;
  border-radius: 15vw;
  z-index: 10;
  height: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${visualCue} 1s ease-out .5s infinite;

  img {
    width: 60%;
  }
`;

export { Title, ScanIconWrapper, ScanVisualCue };