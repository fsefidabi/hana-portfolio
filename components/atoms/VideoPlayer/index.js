import React from "react"
import ReactPlayer from "react-player"

function VideoPlayer({ src }) {
    return (
        <div>
            <ReactPlayer
                width="100%"
                height="100%"
                url={src}
                controls={false}
                light={false}
                pip={true}
                playing={true}
                loop={true}
                muted={true}
            />
            <source src={src} type="video/mp4"/>
        </div>
    )
}

export default VideoPlayer
