export const wrapperTransitions = {
  hidden: { 
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeInOut",
      when: "beforeChildren"
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  }
}
