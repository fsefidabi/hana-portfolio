const sentenceVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const letterVariantsWithFixedPosition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const letterVariantsWithYAxisMove = {
  initial: {  y: "-100%" },
  animate: {  y: 0 }
}

export default {
  sentenceVariants,
  letterVariantsWithFixedPosition,
  letterVariantsWithYAxisMove
}
