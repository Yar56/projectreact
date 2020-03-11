import React from "react";
import AudioStyle from './AudioStyle.module.sass';
import AudioList from "./AudioList";


const Audio = () => {
    return(
    <div className={AudioStyle.audio}>
        <div className={AudioStyle.title}>
            <a href="">Аудиозаписи <span>2222</span></a>
        </div>
        <AudioList/>
    </div>
    )
};

export default Audio;