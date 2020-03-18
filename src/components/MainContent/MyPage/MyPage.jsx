import React from "react";

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import CreatePost from './CreatePost/CreatePost';
import Posts from './Posts/Posts';
import Photos from './Photos/Photos';
import Friends from './Friends/Friends';
import Video from "./Video/Video";
import Audio from "./Audio/Audio";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPageStyle from './MyPageStyle.module.sass';


const MyPage = (props) => {
    return (
        <div className={MyPageStyle.wrapperTabs}>
            <div className={MyPageStyle.firstColumn}>
                <ProfilePhoto />
                <Friends state={props.state}/>
                <Video/>
                <Audio/>
            </div>
            <div className={MyPageStyle.secondColumn}>
                <ProfileInfo state={props.state}/>
                <Photos />
                <CreatePost />
                <Posts state={props.state}/>
            </div>



        </div>
    )
};

export default MyPage;