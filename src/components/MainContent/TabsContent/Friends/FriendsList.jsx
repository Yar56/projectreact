import React from "react";

import FriendsSass from './Friends.module.sass';

const FriendsList = () => {
    return(
        <>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Andy</a>
            </div>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Sam</a>
            </div>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Саша</a>
            </div>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Анастасия</a>
            </div>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Роман</a>
            </div>
            <div className={FriendsSass.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHfYAjdcTNdx9m173T7ct3TKO14kW-f4pYEGKILgTSpx3jc-Cy" alt=""/>
                <a href="#" className={FriendsSass.name}>Фара</a>
            </div>
        </>
    )
};

export default FriendsList;