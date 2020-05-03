import React from "react";
import ProfilePhotoStyle from './ProfilePhotoStyle.module.sass';
import Preloader from "../../../common/preloader/Preloader";


const ProfilePhoto = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return(
        <div className={ProfilePhotoStyle.profilePhoto}>
            <div className={ProfilePhotoStyle.img}>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <div className={ProfilePhotoStyle.actions}>
                <a href="">Редактировать</a>

                <button>
                    <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40"/>
                    </svg>
                    <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40"/>
                    </svg>
                    <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40"/>
                    </svg>
                </button>
            </div>
        </div>
    )
};

export default ProfilePhoto;