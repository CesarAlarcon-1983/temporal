import React from 'react';
import { Container, Video, Content, Image, Overlay } from './wrapper.styles';

export default function Wrapper(props) {
  const { video, children, image, overlay, overlayColor, overlayGradient } = props;

  return (
    <Container>
      {
        video &&
        <Video
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          <span>
            {`Sorry, your browser doesn't support embedded videos.`}
          </span>
        </Video>
      }
      {
        image &&
        <Image src={image} alt={'Background Image'} />
      }
      {
        overlay && 
        <Overlay color={overlayColor} gradient={overlayGradient} />
      }
      <Content>
        {children}
      </Content>
    </Container>
  )
}