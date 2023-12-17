const fadeInOut = function () {
    return {
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
}

const fadeIn = function (duration = 1.5) {
    return {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                opacity: {
                    duration: duration
                }
            }
        }
    }
}

const fadeInWithAutoHeightIncrease = function (duration = 0.5) {
    return {
        initial: {
            height: 0,
            opacity: 0,
            visibility: "hidden"
        },
        animate: {
            height: "auto",
            opacity: 1,
            visibility: "visible",
            transition: {
                height: { duration: duration, type: "spring", velocity: 0, bounce: 0 },
                opacity: { delay: 0.2 }
            }
        }
    }
}

const fadeInUp = function (duration = 2, delay = 0.5, initialOpacity = 0.3, initialYPosition = 50, targetYPosition = 0) {
    return {
        initial: {
            opacity: initialOpacity,
            y: initialYPosition
        },
        animate: {
            opacity: 1,
            y: targetYPosition,
            transition: { duration: duration, delay: delay, type: "spring", velocity: 0, bounce: 0 }
        }
    }
}

const fadeInRight = function (duration = 2, delay = 0.5, initialOpacity = 0.3, initialXPosition = 50) {
    return {
        initial: {
            opacity: initialOpacity,
            x: initialXPosition
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: duration, delay: delay, type: "spring", velocity: 0, bounce: 0 }
        }
    }
}

export default {
    fadeInOut,
    fadeIn,
    fadeInWithAutoHeightIncrease,
    fadeInUp,
    fadeInRight
}
