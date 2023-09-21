export const titleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

export const descriptionVariants = {
  initial: {
    height: 0,
    opacity: 0,
    visibility: "hidden"
  },
  animate: {
    height: "auto",
    opacity: 1,
    visibility: "visible",
    transition: { height: { duration: 0.5, type: "spring", velocity: 0, bounce: 0 }, opacity: { delay: 0.2 } }
  }
}
