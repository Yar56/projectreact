import React from "react";
import ProfileStyle from './ProfileInfoStyle.module.sass'
import ProfileInfoContent from "./ProfileInfoContent";


const ProfileInfo = (props) => {

    let content = props.state.profileInfo
        .map(info => <ProfileInfoContent city={info.city} site={info.site} friendsCount={info.friendsCount}
                                         followersCount={info.followersCount} photosCount={info.photosCount}
                                         videosCount={info.videosCount} audioCount={info.audioCount}/>);

    return(
        <div className={ProfileStyle.profileInfo}>
            <div className={ProfileStyle.name}>
                <p>SAKS PAROPIKUS</p>
                <button>Изменить статус</button>
            </div>
            <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>
            {content}
        </div>
    )
};

export default ProfileInfo;