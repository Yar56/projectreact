import React from "react";

import ProfileStyle from './ProfileInfoStyle.module.sass'

const ProfileInfo = () => {
    return(
        <div className={ProfileStyle.profileInfo}>
            <div className={ProfileStyle.name}>
                <p></p>
                <button>Изменить статус</button>
            </div>
            <svg viewBox="0 0 1000 50" width="600px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>
            <div>
                <p>Город</p> <a href="">Оренбург</a>
                <p>Сайт</p> <a href=""> цццц</a>
            </div>
        </div>
    )
};

export default ProfileInfo;