import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import iconScan from '../../assets/images/icon-scan.svg';
import iconBottom from '../../assets/images/icon-bottom.svg';
import video from '../../assets/videos/main.mp4';
import Nav from '../../components/nav/nav';
import { ScanIconWrapper, ScanVisualCue } from './scan.styles';

export default function Scan() {
  return (
    <Wrapper video={video}>
      <ScanIconWrapper>
        <img src={iconScan} alt={'icon scan'} />
      </ScanIconWrapper>
      <ScanVisualCue>
        <img src={iconBottom} alt={'icon bottom'} />
      </ScanVisualCue>
      <Nav backRoute={'/main'} />
    </Wrapper>
  )
}