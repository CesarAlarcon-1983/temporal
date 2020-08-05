import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  position: absolute;
  top:0;
  bottom:0;
  height:100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  padding: 5vw;
`;

const Image = styled.img`
  position: absolute;
  top:0;
  bottom:0;
  height:100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index: 1;

  background: ${
    (props) => {
      if (props.gradient) {
        return `linear-gradient(to ${props.gradient}, ${props.color}, transparent 60%)`;
      }
      else {
        return `${props.color}`;
      }
    }
  }
`;

export { Container, Video, Content, Image, Overlay };