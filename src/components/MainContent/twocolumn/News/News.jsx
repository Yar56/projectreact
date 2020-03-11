import React from "react";
import './NewsStyle.sass';
import './../twoColumnStyle.sass';
import './../Messages/MessagesStyle.sass';


const News = () => {
    return(
        <>
            <div className="newsHeader">
                <div className="search">
                    <input type="text" placeholder="Что у вас нового"/>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet consectetur illo
                        officiis quis ratione repellendus rerum sed soluta. Commodi dolorem eaque maxime nam natus
                        necessitatibus ratione vitae voluptas!
                    </div>

                </div>
                <div className="historySlider">
                    ffgf
                </div>
                <div className="post">
                    dfggfg
                </div>
                <div className="friendsSlider">
                    fgg
                </div>
            </div>

            <div className="tabsNews">
                <div className="linkNews">
                    <a href="" className="itemLink active">Новости</a>
                    <a href="" className="itemLinkNest">Фотографии</a>
                    <a href="" className="itemLinkNest">Видеозаписи</a>
                    <a href="" className="itemLinkNest">Подкасты</a>
                    <a href="" className="itemLink">Рекомендации</a>
                    <a href="" className="itemLink">Поиск</a>
                    <svg viewBox="0 0 700 50" width="200px" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="30" x2="900" y2="30" stroke="grey"></line>
                    </svg>
                    <a href="" className="itemLink">Понравилось</a>
                    <a href="" className="itemLink">Обновления</a>
                    <a href="" className="itemLink">Комментарии</a>
                </div>
            </div>

        </>
    )
};

export default News;