import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import iconScan from '../../assets/images/icon-scan.svg';
import iconBottom from '../../assets/images/icon-bottom.svg';
// import video from '../../assets/videos/main2.mp4';
import Nav from '../../components/nav/nav';
import { Title, ScanIconWrapper, ScanVisualCue } from './scan.styles';
import pairingBg from '../../assets/images/pairing.jpg';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { wrapperTransitions, scanTransitions, textTransitions } from './scan.transitions';

const MotionWrapper = styled(motion.div)``;

export default function Scan() {

  return (
    <MotionWrapper
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper image={pairingBg} overlay overlayGradient={'bottom'} overlayColor={'rgba(255,255,255,1)'}>
        <Title variants={textTransitions}>Scan your wine</Title>
        <motion.div variants={scanTransitions}>
          <ScanIconWrapper>
            <img src={iconScan} alt={'icon scan'} />
          </ScanIconWrapper>
          <ScanVisualCue>
            <img src={iconBottom} alt={'icon bottom'} />
          </ScanVisualCue>
        </motion.div>
        <Nav />
      </Wrapper>
    </MotionWrapper>
  )
}