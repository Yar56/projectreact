import React from "react";
import VideoStyle from './VideoStyle.module.sass';
import AudioStyle from "../Audio/AudioStyle.module.sass";

const Video = () => {
    return(
        <div className={VideoStyle.video}>
            <div className={VideoStyle.title}>
                <a href="">Видеозаписи <span>2222</span></a>
            </div>
            <div className={VideoStyle.videoWrap}>
                <div className={VideoStyle.item}>
                    <video src="https://www.youtube.com/watch?v=UNZqm3dxd2w"></video>
                    <a>name</a>
                </div>
                <div className={VideoStyle.item}>
                    <video src="https://www.youtube.com/watch?v=UNZqm3dxd2w"></video>
                    <a>name</a>
                </div>
            </div>
        </div>
    )
};

export default Video;