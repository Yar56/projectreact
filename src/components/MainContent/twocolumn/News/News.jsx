import React from "react";
import './NewsStyle.sass';
import './../twoColumnStyle.sass';
import './../Messages/MessagesStyle.sass';
import Post from "../../MyPage/Posts/Post/Post";
import Create from "../../MyPage/CreatePost/CreatePostComponent";
import CreatePostSass from './../../MyPage/CreatePost/CreatePost.module.sass';
import Slider from "./Slider";
import PostStyle from './../../MyPage/Posts/Post/PostStyle.module.sass';

const News = (props) => {


     let sliderItem = props.state.sliderStory
        .map( item => <Slider imgStory={item.imgStory} iconProfile={item.iconProfile} nameProfile={item.nameProfile}/>
            );

     let newsPost = props.state.dataNews
         .map(post => <Post id={post.id} name={post.name} time={post.time} avatar={post.avatar} img={post.img} text={post.text}
            likes={post.likesCount}
         />);

    return(
        <>
            <div className="newsHeader">
                <div className="search">
                    <div className={CreatePostSass.createPost}>

                    </div>
                </div>
                <div className="historySlider">
                    <div>Истории</div>
                    <div className="stories">
                        {sliderItem}

                    </div>
                    <div className="turn">
                        <img className="left" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dropdown-menu-1614249-1368951.png" alt=""/>
                        <img className="right" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dropdown-menu-1614249-1368951.png" alt=""/>
                    </div>
                </div>
                <div className="post">
                    {newsPost}
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