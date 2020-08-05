import styled from 'styled-components';

const SectionTitle = styled.h1`
  font-size: 7.5vw;
  line-height: 1.1;
  margin: 0 0 4vw;
`;

const SectionSubtitle = styled.p`
  font-size: 3.5vw;
  margin: 0 0 7vw;
  font-weight: 500;
`;

const WineSlider = styled.div`
  margin-bottom: 5vw;
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
  width: 28%;
  padding-bottom: 28%;
  height: 0;
  display: block;

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

export {
  SectionTitle,
  SectionSubtitle,
  WineSlider,
  WineSliderHeading,
  Label,
  Line,
  WineSliderTrack,
  WineElement
};