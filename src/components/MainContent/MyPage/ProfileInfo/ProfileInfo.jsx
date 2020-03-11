import React from "react";

import ProfileStyle from './ProfileInfoStyle.module.sass'

const ProfileInfo = () => {
    return(
        <div className={ProfileStyle.profileInfo}>
            <div className={ProfileStyle.name}>
                <p>SAKS PAROPIKUS</p>
                <button>Изменить статус</button>
            </div>
            <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>
            <div className={ProfileStyle.infoWrap}>
                <div className={ProfileStyle.infoItem}>
                    <p>Город:</p> <a href="">Оренбург</a>
                </div>
                <div className={ProfileStyle.infoItem}>
                    <p>Сайт:</p> <a href=""> цццц</a>
                </div>
            </div>
            <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>
            <div className={ProfileStyle.infoCount}>
                <div className={ProfileStyle.infoCountItem}>
                    <span>22</span>
                    <p>друг</p>
                </div>
                <div className={ProfileStyle.infoCountItem}>
                    <span>123</span>
                    <p>подписчиков</p>
                </div>
                <div className={ProfileStyle.infoCountItem}>
                    <span>55</span>
                    <p>фотографии</p>
                </div>
                <div className={ProfileStyle.infoCountItem}>
                    <span>123</span>
                    <p>видеозаписей</p>
                </div>
                <div className={ProfileStyle.infoCountItem}>
                    <span>222</span>
                    <p>аудиозаписей</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;