import React, {useRef, useState} from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";


function Videos({url,channel, desc, song, likes, msgs, share}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // if video playin stop and vice versa

        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            {/*<source*/}
            {/*    className="video_player"*/}
            {/*    src="../public/Videos/video.mp4" type="video/mp4"/>*/}
            <video
                onClick={handleVideoPress}
                ref={videoRef}
                loop
                className="video_player"
                src={url}/>
            <VideoFooter channel={channel} desc={desc} song={song}/>
            <VideoSidebar likes={likes} msgs={msgs} share={share}/>
            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    );
}

export default Videos;
