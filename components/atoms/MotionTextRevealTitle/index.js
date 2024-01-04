import { motion } from "framer-motion"
import { textReveal } from "framerMotionAnimations"
import ArrowSvg from "svgIcons/arrowWithTail1.svg"
import styles from "./motionTextRevealTitle.module.css"

export default function MotionTextRevealTitle({ text, wrapperClass, elementClass, showArrowSvg = false }) {
    return (
        text?.length > 0 ? <motion.div
            className={wrapperClass}
            initial={"initial"}
            whileInView="animate"
            viewport={{ once: false, margin: `200px 0px -200px 0px` }}
            variants={textReveal.parentVariantsWithStaggerChildren()}
        >
            {text?.map((item, itemIndex) => {
                return item?.children?.map((child, childIndex) => {
                    return <p key={child._key} className={elementClass}>
                        {child.text.split(" ").map((word, wordIndex) => {
                            return (
                                <>
                                    <span key={word + "-" + wordIndex} className={"whitespace-nowrap"}>
                                        {word.split("").map((char, charIndex) => {
                                            return (
                                                <motion.span
                                                    key={char + "-" + charIndex}
                                                    variants={textReveal.letterVariantsWithFixedPosition()}
                                                    className={"inline-block"}
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </span>
                                    <span> </span>
                                </>
                            )
                        })}
                        {showArrowSvg && childIndex === item.children.length - 1 && itemIndex === text.length - 1 && <motion.div
                            variants={textReveal.letterVariantsWithFixedPosition()}
                            className={`inline-block ${styles.arrowContainer} svgWrapper`}
                        >
                            <ArrowSvg/>
                        </motion.div>}
                    </p>
                })
            })}
        </motion.div> : null
    )
}
