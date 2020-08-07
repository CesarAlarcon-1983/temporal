const wrapperTransitions = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: .5,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.3,
    }
  }
}

const sliderTransitions = {
  hidden: { 
    opacity: 0,
    y:'-100vw',
  },
  show: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
    }
  },
  exit: { 
    y:'-100vw',
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export { wrapperTransitions, sliderTransitions };