import React from "react";

import PostsSass from './Posts.module.sass';
import Post from "./Post/Post";

const Posts = (props) => {

    let post = props.state.dataPost
        .map(post => <Post avatar={post.avatar} name={post.name} time={post.time} img={post.img} text={post.text} likes={post.likesCount}/>
        );

    return(
        <div className={PostsSass.posts}>
            <div className={PostsSass.tabs}>
                <div className={PostsSass.itemTabs}><p>Все записи</p></div>
                <div className={PostsSass.itemTabs}><p>Мои записи</p></div>
                <div className={PostsSass.itemTabs}><p>Архив записей</p></div>
            </div>

            <div className={PostsSass.tabsContent}>
                {post}
            </div>
            
        </div>
    )
};


export default Posts;