const wrapperTransitions = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: 1,
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