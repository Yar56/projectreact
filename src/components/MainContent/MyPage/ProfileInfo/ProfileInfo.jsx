import React from "react";
import ProfileStyle from './ProfileInfoStyle.module.sass'
import ProfileInfoContent from "./ProfileInfoContent";
import Preloader from "../../../common/preloader/Preloader";


const ProfileInfo = (props) => {

    // let content = props.state.profilePage.profileInfo
    //     .map(info => <ProfileInfoContent city={info.city} site={info.site} friendsCount={info.friendsCount}
    //                                      followersCount={info.followersCount} photosCount={info.photosCount}
    //                                      videosCount={info.videosCount} audioCount={info.audioCount}/>);
    if (!props.profile) {
        return <Preloader/>
    }
    return(
        <div className={ProfileStyle.profileInfo}>
            <div className={ProfileStyle.name}>
                <p>{props.profile.fullName}</p>
                <button>Изменить статус</button>
            </div>
            <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
                <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
            </svg>
            {/*{content}*/}
            <ProfileInfoContent profile={props.profile}/>
        </div>
    )
};

export default ProfileInfo;