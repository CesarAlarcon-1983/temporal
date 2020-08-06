import styled, { keyframes } from 'styled-components';
import { fadeInLeftBig } from 'react-animations';
import { fadeInLeft } from 'react-animations';
import { fadeInDown } from 'react-animations';

const fadeInSlides = keyframes`${fadeInLeftBig}`;
const fadeInText = keyframes`${fadeInDown}`;
const fadeInBottles = keyframes`${fadeInLeft}`;

const SectionTitle = styled.h1`
  opacity: 0;
  animation: 1s .5s ${fadeInText} forwards;
  font-size: 7.5vw;
  line-height: 1.1;
  margin: 7vw 0 4vw;
`;

const SectionSubtitle = styled.p`
  opacity: 0;
  animation: 1s .8s ${fadeInText} forwards;
  font-size: 3.5vw;
  margin: 0 0 7vw;
  font-weight: 500;
`;

const WineSlider = styled.div`
  margin-bottom: 5vw;

  &:nth-of-type(1) {
      opacity: 0;
      animation: 1s .5s ${fadeInSlides} forwards;
  }
  &:nth-of-type(2) {
      opacity: 0;
      animation: 1s .8s ${fadeInSlides} forwards;
  }
  &:nth-of-type(3) {
      opacity: 0;
      animation: 1s 1.1s ${fadeInSlides} forwards;
  }
`;

const WineSliderHeading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2vw;
`;

const Label = styled.span`
  font-size: 3vw;
  flex-grow: 2;
  display: block;
  white-space: nowrap;
  padding-right: 3vw;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  flex-shrink: 2;
`;

const WineSliderTrack = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WineElement = styled.a`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  display: block;
  opacity: 0;
  animation: .5s 1.3s ${fadeInBottles} forwards;

  &:before {
    content: '';
    border-radius: 50%;
    width: 75%;
    height: 75%;
    background: rgba(255,255,255,.3);
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate3d(-50%, -50%, 0);
  }

  img {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ArrowPrev = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    width: 2vw;
    height: 2vw;
    border-top: 0.5vw solid #fff;
    border-left: 0.5vw solid #fff;
    transform: rotate(-45deg);
    display: block;
  }
`;

const ArrowNext = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    width: 2vw;
    height: 2vw;
    border-top: 0.5vw solid #fff;
    border-left: 0.5vw solid #fff;
    transform: rotate(135deg);
    background: none;
    display: block;
  }
`;

export {
  SectionTitle,
  SectionSubtitle,
  WineSlider,
  WineSliderHeading,
  Label,
  Line,
  WineSliderTrack,
  WineElement,
  ArrowNext,
  ArrowPrev
};