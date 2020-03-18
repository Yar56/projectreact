import ProfileStyle from "./ProfileInfoStyle.module.sass";
import React from "react";


const ProfileInfoContent = (props) => {
    return(
        <>
        <div className={ProfileStyle.infoWrap}>
            <div className={ProfileStyle.infoItem}>
                <p>Город:</p> <a href="">{props.city}</a>
            </div>
            <div className={ProfileStyle.infoItem}>
                <p>Сайт:</p> <a href="">{props.site}</a>
            </div>
        </div>
        <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
        </svg>
        <div className={ProfileStyle.infoCount}>
            <div className={ProfileStyle.infoCountItem}>
                <span>{props.friendsCount}</span>
                <p>друг</p>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <span>{props.followersCount}</span>
                <p>подписчиков</p>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <span>{props.photosCount}</span>
                <p>фотографии</p>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <span>{props.videosCount}</span>
                <p>видеозаписей</p>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <span>{props.audioCount}</span>
                <p>аудиозаписей</p>
            </div>
        </div>
        </>
    )
};

export default ProfileInfoContent;