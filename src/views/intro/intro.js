import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Button from '../../components/button/button';
import video from '../../assets/videos/intro.mp4';
import { IntroContent } from './intro.styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { wrapperTransitions, childTransitions } from './intro.transitions';

const MotionWrapper = styled(motion.div)``;

export default function Intro() {
  const url = useHistory();

  return (
    <MotionWrapper
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper
        video={video}
        overlay
        overlayColor={'rgba(0,0,0,.2)'}
      >
        <IntroContent
          variants={childTransitions}
        >
          <p>{'EXPERIENCE'}</p>
          <h1>{'Wine guru'}</h1>
          <Button label={'Touch to Start'} onClick={() => {url.push('/main')}} />
        </IntroContent>
      </Wrapper>
    </MotionWrapper>
  )
}