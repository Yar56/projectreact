import React from "react";

import FriendsSass from './Friends.module.sass';

const FriendsList = (props) => {
    return(
        <>
            <div className={FriendsSass.item}>
                {props.img}
                <a href="#" className={FriendsSass.name}>{props.name}</a>
            </div>

        </>
    )
};

export default FriendsList;