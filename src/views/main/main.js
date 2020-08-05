import React, { useEffect } from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import video from '../../assets/videos/main2.mp4';
import Button from '../../components/button/button';
import { wrapperTransitions, actionsContainerTransitions, buttonsTransitions } from './main.transitions';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import {
  TextContainer,
  ActionsContainer
} from './main.styles';

const MotionWrapper = styled(motion.div)``;

export default function Main() {

  const url = useHistory();
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 0,
      x: 100,
      transition: { delay: (i * 0.3) + 1 },
    }))
  }, [])


  return (
    <MotionWrapper
      variants={wrapperTransitions}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Wrapper video={video} overlay overlayGradient={'bottom'} overlayColor={'rgba(255,255,255,1)'}>
        <TextContainer>
          <p>{'WELCOME'}</p>
          <h1>{'How can we help you?'}</h1>
        </TextContainer>
        <ActionsContainer
          variants={actionsContainerTransitions}
        >
          <Button label={'Scan your wine'} onClick={() => {url.push('/scan')}} />
          <Button label={'Food pairing'} onClick={() => {url.push('/food-pairing')}} />
          <Button label={'Ocations'} onClick={() => {url.push('/ocations')}} />
        </ActionsContainer>
      </Wrapper>
    </MotionWrapper>
  )
}