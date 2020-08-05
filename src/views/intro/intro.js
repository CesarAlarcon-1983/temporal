import React from 'react';
import Wrapper from '../../components/wrapper/wrapper';
import Button from '../../components/button/button';
import video from '../../assets/videos/intro.mp4';
import { IntroContent } from './intro.styles';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

const MotionWrapper = styled(motion.div)``;

const wrapperTransitions = {
  hidden: { 
    // opacity: 0
    x: '-100vw',
  },
  show: {
    x: '0',
    // opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
    }
  },
  exit: { 
    // opacity: 0,
    x: '100vw',
    transition: {
      duration: 1,
      ease: "easeInOut",
      when: "afterChildren"
    }
  }
}

const childTransitions = {
  hidden: { 
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

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