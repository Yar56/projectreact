import React from "react";
import ContentMessage from "./ContentMessage";
import './MessagesStyle.sass';
import {NavLink} from "react-router-dom";




const Message = (props) => {
    let path = "/dialogs/" + props.id;


    return(
        <>
        <NavLink  to={path} className="wrapMessage">
            <div className="ava">
                {props.avatar}
            </div>
            <div className="infoMessage">
                <div className="wrapInfo">
                    <div className="name">{props.name}</div>
                </div>
            </div>
        </NavLink>
        </>
    )
};

export default Message;
