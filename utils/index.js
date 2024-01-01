export function getZoomedImageSize(imageSrc) {
    return new Promise((resolve, reject) => {
        if (!imageSrc) {
            reject("Image source is missing")
            return
        }

        const image = new Image()
        image.src = imageSrc

        image.onload = () => {
            const imageAspectRatio = image.width / image.height
            const windowAspectRatio = window.innerWidth / window.innerHeight

            const imageHeight = window.innerHeight * 0.95
            const imageWidth = imageHeight * imageAspectRatio

            let imageDimensions

            if (windowAspectRatio < imageAspectRatio) {
                imageDimensions = { width: window.innerWidth * 0.95 + "px", height: "auto" }
            } else if (window.innerHeight > window.innerWidth) {
                imageDimensions = { width: window.innerWidth * 0.95 + "px", height: "auto" }
            } else {
                imageDimensions = { width: imageWidth + "px", height: imageHeight + "px" }
            }

            resolve(imageDimensions)
        }

        image.onerror = () => {
            reject("Failed to load image")
        }
    })
}

export function getMouseSegment(event, targetSegment, targetElement) {
    const { clientX, currentTarget } = event
    const element = targetElement || currentTarget
    const elementBoundingRect = element.getBoundingClientRect()
    const mouseX = clientX - elementBoundingRect.left
    const imageWidth = element.offsetWidth

    const leftThreshold = targetSegment * imageWidth
    const rightThreshold = (1 - targetSegment) * imageWidth

    if (mouseX < leftThreshold && clientX > elementBoundingRect.left) {
        return -1 // left
    } else if (mouseX > rightThreshold && clientX < elementBoundingRect.right) {
        return 1 // right
    } else {
        return 0 // center
    }
}

export function switchClassesForElement(element, classesToAdd = [], classesToRemove = []) {
    if (!element) return
    for (const cls of classesToAdd) {
        element.classList.add(cls)
    }
    for (const cls of classesToRemove) {
        element.classList.remove(cls)
    }
}

