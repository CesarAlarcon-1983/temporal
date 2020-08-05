import styled from 'styled-components';

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
`;

const ScanVisualCue = styled.div`
  position: absolute;
  left:50%;
  top: 50%;
  transform: translate3d(-50%, 40vw, 0);
  width: 8vw;
  border: .5vw solid #fff;
  border-radius: 15vw;
  z-index: 10;
  height: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

export { Title, ScanIconWrapper, ScanVisualCue };