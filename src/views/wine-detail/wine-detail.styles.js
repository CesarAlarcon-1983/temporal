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
    background: #B58E40;
    padding: 0.5vw 0.8vw;
    font-size: 2vw;
    color: #fff;
    margin-right: 1.5vw;
    border-radius: 0.5vw;
    text-transform: uppercase;
  }
`;

const WineGraph = styled.div`
  display: block;
  width: 20%;
  position: relative;
  margin-right: 3vw;
`;

const WineGraphLabel = styled.span`
  position: absolute;
  left: 50%;
  top: 7.5vw;
  font-size: 2vw;
  transform: translateX(-50%);
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
  right:5vw;
  top:5vw;
  width: 35%;
`;

const WineDesc = styled.p`
  font-size: 2.5vw;
  width: 50vw;
  margin-bottom: 7vw;
`;


const WineGraphGroup = styled.div`
  display: flex;
`;

const WineBottle = styled.img`
  position: absolute;
  bottom: 5vw;
  right: 10vw;
  width: 20vw;
  z-index: 100;
`;

export {
  BottomCurve,
  WineDetailInfo,
  WineDetailName,
  WineFeatures,
  WineGraph,
  WineGraphLabel,
  WineGraphCircle,
  WineGraphName,
  WineLocation,
  WineDesc,
  WineGraphGroup,
  WineBottle
};