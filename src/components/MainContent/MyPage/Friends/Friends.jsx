import React from "react";
import FriendsSass from './Friends.module.sass';
import FriendsList from "./FriendsList";

const Friends = () => {
    return(
        <div className={FriendsSass.friends}>
            <div className={FriendsSass.titleCount}>
                <a className={FriendsSass.friendsOfline} href="">Друзья <span>22</span></a>
                <a className={FriendsSass.update} href="">обновления</a>
            </div>
            <div className={FriendsSass.friendsCount}>
                <FriendsList/>
            </div>
            <svg viewBox="0 0 1000 50" width="300px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>

            <div className={FriendsSass.titleOnline}>
                <a href="">Друзья онлайн <span>22</span></a>
            </div>
            <div className={FriendsSass.friendsOnline}>
                <FriendsList/>
            </div>
        </div>
    )
};


export default Friends;