const fade = {
  animate: {
    opacity: 1,
    visibility: "visible",
    transition: {
      visibility: {
        duration: 0.5,
        delay: 0.5
      },
      opacity: {
        duration: 0.25
      }
    }
  },
  exit: {
    opacity: 0,
    visibility: "hidden",
    transition: {
      visibility: {
        duration: 0.5,
        delay: 0.5
      },
      opacity: {
        duration: 0.25
      }
    }
  }
}

export default fade
