import React from "react";

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';

import Photos from './Photos/Photos';
import Friends from './Friends/Friends';
import Video from "./Video/Video";
import Audio from "./Audio/Audio";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPageStyle from './MyPageStyle.module.sass';
import PostsContainer from "./Posts/PostsContainer";
import Redirect from "react-router-dom/es/Redirect";


const MyPage = (props) => {

    return (
        <div className={MyPageStyle.wrapperTabs}>
            <div className={MyPageStyle.firstColumn}>
                <ProfilePhoto profile={props.profile}/>
                <Friends />
                <Video/>
                <Audio/>
            </div>
            <div className={MyPageStyle.secondColumn}>
                <ProfileInfo  profile={props.profile}/>
                <Photos />
                <PostsContainer />
            </div>
        </div>
    )
};

export default MyPage;