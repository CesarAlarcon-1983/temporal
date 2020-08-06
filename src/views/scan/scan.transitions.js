const wrapperTransitions = {
    hidden: { 
      opacity: 0
    },
    show: {
      x: '0',
      opacity: 1,
      transition: {
        duration: .5,
        delay: 1,
        when: "beforeChildren",
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: .5,
        ease: "easeInOut",
        when: "afterChildren"
      }
    }
  }
  
  const scanTransitions = {
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

  const textTransitions = {
    hidden: { 
      opacity: 0,
      y: -100,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    },
    exit: { 
      y: -100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }
  
export { wrapperTransitions, scanTransitions, textTransitions };