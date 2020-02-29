import React from "react";
import CoverNavStyle from './NavigationStyle.module.sass';

const Navigation = () => {
    return(
        <div className={CoverNavStyle.wrapNav}>
                <div className={CoverNavStyle.myPage}>
                    <a href="">Моя страница</a>
                </div>
                <div className={CoverNavStyle.news}>
                    <a href="">Новости</a>
                </div>
                <div className={CoverNavStyle.message}>
                    <a href="">Сообщения</a>
                </div>
                <div className={CoverNavStyle.friends}>
                    <a href="">Друзья</a>
                </div>
                <div className={CoverNavStyle.communities}>
                    <a href="">Сообщества</a>
                </div>
                <div className={CoverNavStyle.music}>
                    <a href="">Фотографии</a>
                </div>
                <div className={CoverNavStyle.video}>
                    <a href="">Фотографии</a>
                </div>
                <div className={CoverNavStyle.game}>
                    <a href="">Игры</a>
                </div>
                <svg viewBox="0 0 1000 50" width="100px" xmlns="http://www.w3.org/2000/svg">
                    <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
                </svg>
                <div className={CoverNavStyle.bookmarks}>
                    <a href="">Закладки</a>
                </div>
                <div className={CoverNavStyle.documents}>
                    <a href="">Документы</a>
                </div>
        </div>
    )
};

export default Navigation;