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

export { wrapperTransitions, childTransitions };