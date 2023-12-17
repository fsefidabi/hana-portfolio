const fadeInOut = {
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

const fadeIn = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            opacity: {
                duration: 1.5
            }
        }
    }
}

const fadeInWithAutoHeightIncrease = {
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

const fadeInUp = {
    initial: {
        opacity: 0.3,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 2, delay: 0.5, type: "spring", velocity: 0, bounce: 0 }
    }
}

const fadeInUp2 = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring", velocity: 0, bounce: 0 }
    }
}

const fadeInRight = {
    initial: {
        opacity: 0.3,
        x: 50
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 2, delay: 0.5, type: "spring", velocity: 0, bounce: 0 }
    }
}

export default {
    fadeInOut,
    fadeIn,
    fadeInWithAutoHeightIncrease,
    fadeInUp,
    fadeInUp2,
    fadeInRight
}
