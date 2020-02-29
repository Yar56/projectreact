import React from "react";

import HeaderClass from './Header.module.sass';

const Header = () => {
    return (
    <header className={HeaderClass.header}>
        <div className={HeaderClass.content}>
            <div className={HeaderClass.logo}>
                <img  src="https://img.icons8.com/ios/45/000000/redux.png" alt=""/>
            </div>

            <div className={HeaderClass.search}>
                <input type="text" placeholder="Поиск"/>
            </div>

            <div className={HeaderClass.notice}>
                <img src="https://img.icons8.com/ios/40/000000/appointment-reminders.png" alt=""/>
            </div>
            <div className={HeaderClass.music}>

            </div>
            <div className={HeaderClass.dropDown}>
                <a href="">
                    <p>yaroslav</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiHYsRv2lYOnDJm4Akgl82tyw9CHGblj4I4_XGDUeYbS2CMebg" alt=""/>
                    <img className={HeaderClass.menuDown} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dropdown-menu-1614249-1368951.png" alt=""/>
                </a>
                <div className={HeaderClass.dropDownWrap}>
                    <div>
                        <a href="">Моя страница</a>
                    </div>
                    <div>
                        <a href="">Редактировать</a>
                    </div>
                    <div>
                        <a href="">Настройки</a>
                    </div>
                    <div>
                        <a href="">Помощ</a>
                    </div>
                    <div>
                        <a href="">Выйти</a>
                    </div>
                </div>
            </div>
        </div>

    </header>
    )
};

export default Header;