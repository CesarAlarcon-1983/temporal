const wrapperTransitions = {
    hidden: { 
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: .5,
        delay: 1.5,
        ease: "easeInOut",
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: .5,
        ease: "easeInOut",
        when: "afterChildren"
      },
    }
  }
  
  const actionsContainerTransitions = {
    hidden: { 
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration: .5,
      }
    },
    exit: { 
      y: 100,
      opacity: 0,
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    }
  }

  const textContainerTransitions = {
    hidden: { 
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        // duration: .5,
      }
    },
    exit: { 
      y: -100,
      opacity: 0,
      transition: {
        duration: .5,
        ease: "easeInOut"
      }
    }
  }

export { wrapperTransitions, actionsContainerTransitions, textContainerTransitions };