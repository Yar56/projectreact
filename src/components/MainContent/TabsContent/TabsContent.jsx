import React from "react";

import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import CreatePost from './CreatePost/CreatePost';
import Posts from './Posts/Posts';
import Photos from './Photos/Photos';
import Friends from './Friends/Friends';
import Video from "./Video/Video";
import Audio from "./Audio/Audio";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import TabsContentStyle from './TabsContentStyle.module.sass';


const TabsContent = () => {
    return (
        <div className={TabsContentStyle.wrapperTabs}>
            <div className={TabsContentStyle.firstColumn}>
                <ProfilePhoto />
                <Friends />
                <Video/>
                <Audio/>
            </div>
            <div className={TabsContentStyle.secondColumn}>
                <ProfileInfo/>
                <Photos />
                <CreatePost />
                <Posts />
            </div>



        </div>
    )
};

export default TabsContent;