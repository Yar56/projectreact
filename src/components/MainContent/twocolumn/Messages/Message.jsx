import React from "react";
import './MessagesStyle.sass';
import {Link, NavLink} from "react-router-dom";

const ContentMessage = (props) => {

    return (
        <div className="text">
            {props.avatar}
            <span className="message active">{props.message}</span>
        </div>
    )
};


const Message = (props) => {
    let path = "/dialogs/" + props.id;

    let content = [
        {id:1, avatar: <img src="https://img.icons8.com/emoji/22/000000/girl-dark-skin-tone.png"/>, message: "hi"}
    ];

    return(
        <NavLink to={path} className="wrapMessage">
            <div className="ava">
                {props.avatar}
            </div>
            <div className="contentMessage">
                <div className="wrapInfo">
                    <div className="name">{props.name}</div>
                    <div className="time">
                        <span>{props.time}</span>
                    </div>
                </div>

                <ContentMessage avatar={content[0].avatar}
                                message={content[0].message}
                />

            </div>

            <div className="dialogContent">

            </div>
        </NavLink>
    )
};

export default Message;
