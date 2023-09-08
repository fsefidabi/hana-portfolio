import { motion } from "framer-motion"

export default function MotionParagraph({ key, text }) {
  return <motion.p
    key={key}
    initial={{
      height: 0,
      opacity: 1
    }}
    animate={{
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.25,
          delay: 0.15
        }
      }
    }}
    exit={{
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.25
        }
      }
    }}
  >
    {text}
  </motion.p>
}
