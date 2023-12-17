const parentVariantsWithStaggerChildren = function (staggerChildren = 0.05) {
    return {
        initial: { opacity: 1 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren
            }
        }
    }
}

const letterVariantsWithFixedPosition = function () {
    return {
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    }
}

const letterVariantsWithYAxisMove = function () {
    return {
        initial: { y: "-100%" },
        animate: { y: 0 }
    }
}

const boxRevealToTop = function () {
    return {
        initial: { y: "20%", opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }
}

export default {
    parentVariantsWithStaggerChildren,
    letterVariantsWithFixedPosition,
    letterVariantsWithYAxisMove,
    boxRevealToTop
}
