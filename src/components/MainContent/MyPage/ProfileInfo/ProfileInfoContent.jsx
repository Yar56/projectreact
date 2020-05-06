import ProfileStyle from "./ProfileInfoStyle.module.sass";
import React from "react";


const ProfileInfoContent = (props) => {

    return(

        <>
        <div className={ProfileStyle.infoWrap}>
            <div className={ProfileStyle.infoItem}>
                <p>Обо мне:</p> <a href="">{!props.profile.aboutMe ? <div>Данных нет</div> : props.profile.aboutMe}</a>
            </div>
            <div className={ProfileStyle.infoItem}>
                <p>Сайт:</p> <a href="">{!props.profile.site ? <div>Сайт не найден</div> : props.profile.site}</a>
            </div>
        </div>
        <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
        </svg>
        <div className={ProfileStyle.infoCount}>
            <div className={ProfileStyle.infoCountItem}>
                <p>GitHub:</p>
                <span>{props.profile.contacts.github}</span>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <p>vk:</p>
                <span>{props.profile.contacts.vk}</span>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <p>Instagram:</p>
                <span>{props.profile.contacts.instagram}</span>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <p>facebook:</p>
                <span>{props.profile.contacts.facebook}</span>
            </div>
            <div className={ProfileStyle.infoCountItem}>
                <p>twitter:</p>
                <span>{props.profile.contacts.twitter}</span>
            </div>
        </div>
        </>
    )
};

export default ProfileInfoContent;