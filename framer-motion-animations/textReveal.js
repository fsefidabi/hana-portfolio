const sentenceVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const letterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

export default {
  sentenceVariants,
  letterVariants
}
