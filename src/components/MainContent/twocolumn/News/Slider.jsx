import React from "react";
import './NewsStyle.sass';

const Slider = (props) => {
    return(
        <>
            <a href="#" className="story">
                <div className="imgStory">
                    {props.imgStory}
                </div>
                <div className="descr">
                    <div className="iconProfile">
                        {props.iconProfile}
                    </div>
                    <span className="nameProfile">{props.nameProfile}</span>
                </div>
            </a>
        </>
    )
};

export default Slider;