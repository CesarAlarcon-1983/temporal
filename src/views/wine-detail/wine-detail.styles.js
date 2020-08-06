import styled from 'styled-components';

const BottomCurve = styled.img`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

const WineDetailInfo = styled.div`
  padding-bottom: 70vw;
`;

const WineLocationInfo = styled.div`
  width: 50vw;
  padding: 5vw;
  background: linear-gradient(to bottom, rgba(165,2,56,.7) 40%, transparent);

  img {
    width: 60%;
  }
`;


const WineCheeseInfo = styled.div`
  width: 50vw;
  padding: 5vw;
  background: linear-gradient(to bottom, rgba(165,2,56,.7) 40%, transparent);
  text-align: center;
`;

const WineDetailName = styled.div`
  margin-bottom: 3vw;
  
  span {
    display: block;
    margin: 0 0 2vw;
    font-size: 4vw;
    
    &:first-of-type {
      text-transform: uppercase;
    }

    &:last-of-type {
      font-size: 3vw;
    }
  }

  h1 {
    font-size: 7vw;
    line-height: 1;
    margin: 0 0 2vw;
  }
`;

const WineFeatures = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 3vw;

  li {
    background: #7B1432;
    padding: 0.5vw 0.8vw;
    font-size: 2vw;
    color: #fff;
    margin-right: 1.5vw;
    border-radius: 0.5vw;
    text-transform: uppercase;
  }
`;

const WineGrape = styled.p`
  padding: 1.5vw;
  border-radius: 1vw;
  font-size: 2.5vw;
  width: 50vw;
  margin-bottom: 4vw;
  background: rgba(165,2,56,.6);

  strong {
    display: block;
    margin-bottom: .3vw;
  }
`;

const WineGraph = styled.div`
  display: block;
  width: 18%;
  position: relative;
  margin-right: 3vw;
`;

const WineGraphLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 7.5vw;
  font-size: 2vw;
  transform: translate3d(-50%,-50%,0);
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
`;

const WineGraphCircle = styled.div`
  width: 100%;
  padding-bottom:100%;
  position: relative;
  text-align: center;
  margin-bottom: 2vw;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    border: 3vw solid rgba(255,255,255,.3);
    border-radius: 50%;
  }

  &:after {
    border-bottom: 3vw solid rgba(165,2,56,.6);
    transform: rotate(45deg);
  }
`;

const WineGraphName = styled.div`
  font-size: 2vw;
  width: 100%;
  text-align: center;
  display: block;
`;

const WineLocation = styled.img`
  position: absolute;
  right:-5vw;
  top:20vw;
  width: 45%;
`;

const WineDesc = styled.p`
  font-size: 2.5vw;
  max-width: 50vw;
  margin-bottom: 4vw;
  width: 100%;
`;

const WineGraphGroup = styled.div`
  display: flex;
`;

const WineBottle = styled.img`
  position: absolute;
  bottom: 10vw;
  right: 10vw;
  width: 17vw;
  z-index: 100;
`;

const WineGraphInfoBtn = styled.a`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  border: .3vw solid #fff;
  background: rgba(165,2,56,1);
  position: absolute;
  right: 5%;
  top:5%;
  display:  block;

  &:after,
  &:before {
    content: '';
    width: 1vw;
    height: .3vw;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate3d(-50%, -50%, 0) rotate(0);
    display:  block;
    background: #fff;
  }

  &:after {
    transform: translate3d(-50%, -50%, 0) rotate(90deg);
  }
`;

const CheeseSuggestion = styled.div`
  width: 35vw;
  height: 35vw;
  position: absolute;
  bottom: 34vw;
  left: 13.5vw;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  span {
    font-family: 'DM Serif Display', serif;
    font-size: 4vw;
    position: relative;
    z-index: 10;
    display: block;
    margin-bottom: 2vw;
    text-align: center;
    line-height: 1;
    width: 90%;
  }

  img {
    &:first-of-type {
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      height: 120%;
    }

    &:last-of-type {
      width: 10vw;
      position: relative;
      z-index: 10;
    }
  }

  &:before {
    content: '';
    background: linear-gradient(to top, rgba(0,0,0,.7), transparent);
    position: absolute;
    left:0%;
    right:0%;
    bottom:0%;
    top:0%;
    z-index: 5;
  }
`;

const WineGraphinfo = styled.div`
  background: linear-gradient(to bottom, rgba(165,2,56,1) 40%, transparent);
  padding: 1.5vw;
  border-radius: 1vw;

  strong {
    display: block;
    font-size: 2vw;
    margin-bottom: 1vw;
  }
  p {
    font-size: 1.7vw;
    margin: 0;
  }
`;

const BackButton = styled.a`
  display: flex;
  align-items: center;

  span {
    font-size: 2.5vw;
    margin-left: 10px;
    display: block;
    text-transform: uppercase;
  }
`;

const CheeseInfoImage = styled.div`
  width: 35vw;
  height: 35vw;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  position: relative;
  margin: auto auto 3vw;

  img {
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    height: 120%;
  }

  & + span {
    display: block;
    margin-bottom: 8vw;
  }
`;

export {
  BottomCurve,
  WineDetailInfo,
  WineDetailName,
  WineFeatures,
  WineGraph,
  WineGraphLabel,
  WineGrape,
  WineGraphName,
  WineLocation,
  WineDesc,
  WineGraphGroup,
  WineBottle,
  WineGraphInfoBtn,
  CheeseSuggestion,
  WineGraphinfo,
  BackButton,
  WineLocationInfo,
  WineCheeseInfo,
  CheeseInfoImage
};