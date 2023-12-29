export function getZoomedImageSize(imageSrc) {
    return new Promise((resolve, reject) => {
        if (!imageSrc) {
            reject('Image source is missing');
            return;
        }

        const image = new Image();
        image.src = imageSrc;

        image.onload = () => {
            const imageAspectRatio = image.width / image.height;
            const windowAspectRatio = window.innerWidth / window.innerHeight;

            const imageHeight = window.innerHeight * 0.95;
            const imageWidth = imageHeight * imageAspectRatio;

            let imageDimensions;

            if (windowAspectRatio < imageAspectRatio) {
                imageDimensions = { width: window.innerWidth * 0.95 + 'px', height: 'auto' };
            } else if (window.innerHeight > window.innerWidth) {
                imageDimensions = { width: window.innerWidth * 0.95 + 'px', height: 'auto' };
            } else {
                imageDimensions = { width: imageWidth + 'px', height: imageHeight + 'px' };
            }

            resolve(imageDimensions);
        };

        image.onerror = () => {
            reject('Failed to load image');
        };
    });
}
