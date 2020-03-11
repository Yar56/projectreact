import React from "react";
import AudioStyle from './AudioStyle.module.sass';

const AudioList = () => {
    return(
        <div className={AudioStyle.audioWrap}>
            <div className={AudioStyle.itemList}>
                <img src="https://sun9-30.userapi.com/c830400/v830400178/1c772d/RiZYHHo03xk.jpg" alt=""/>
                <div className={AudioStyle.text}>
                    <span>трек</span>
                    <a href="">исполнитель</a>
                </div>
            </div>
            <div className={AudioStyle.itemList}>
                <img src="https://sun9-30.userapi.com/c830400/v830400178/1c772d/RiZYHHo03xk.jpg" alt=""/>
                <div className={AudioStyle.text}>
                    <span>трек</span>
                    <a href="">исполнитель</a>
                </div>
            </div>
            <div className={AudioStyle.itemList}>
                <img src="https://sun9-30.userapi.com/c830400/v830400178/1c772d/RiZYHHo03xk.jpg" alt=""/>
                <div className={AudioStyle.text}>
                    <span>трек</span>
                    <a href="">исполнитель</a>
                </div>
            </div>
        </div>
    )
};

export default AudioList;