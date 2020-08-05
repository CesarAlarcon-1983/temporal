import styled from 'styled-components';

const ScanIconWrapper = styled.div`
  position: absolute;
  left:50%;
  transform: translate3d(-50%, -50%, 0);
  width: 45vw;

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
  transform: translate3d(-50%, 40vw, 0);
  width: 10vw;
  border: .5vw solid #fff;
  border-radius: 15vw;
  z-index: 10;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

export { ScanIconWrapper, ScanVisualCue };