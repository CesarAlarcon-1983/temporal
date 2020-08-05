import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import iconScan from '../../assets/images/icon-scan.svg';
import iconBottom from '../../assets/images/icon-bottom.svg';
import video from '../../assets/videos/main2.mp4';
import Nav from '../../components/nav/nav';
import { Title, ScanIconWrapper, ScanVisualCue } from './scan.styles';

export default function Scan() {
  return (
    <Wrapper video={video} overlay overlayGradient={'bottom'} overlayColor={'rgba(255,255,255,1)'}>
      <Title>Scan your wine</Title>
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