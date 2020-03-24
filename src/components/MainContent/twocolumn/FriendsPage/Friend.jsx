import React from "react";
import './FriendsPageStyle.sass';

const Friend = (props) => {
    return(
       <div className="friend">
           <div className="friendAvatar">
               {props.img}
           </div>
           <div className="wrapperInfo">
               <a className="friendName" href="">{props.name}</a>
               <span className="friendDescr">{props.descr}</span>
               <a  className="message" href="">Написать сообщение</a>
           </div>
           <div className="dropMenu">
               <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                   <circle cx="50" cy="50" r="40"/>
               </svg>
               <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                   <circle cx="50" cy="50" r="40"/>
               </svg>
               <svg viewBox="0 0 100 100" width="11" style={{fill:"#ccc"}} xmlns="http://www.w3.org/2000/svg">
                   <circle cx="50" cy="50" r="40"/>
               </svg>
           </div>
           <div className="dropMenuContent">
               <a href="">Посмотреть друзей</a>
               <a href="">Предложить друзей</a>
               <a href="">Удалить из друзей</a>
           </div>
           <svg viewBox="10 10 800 40" width="685px" height="50px" xmlns="http://www.w3.org/2000/svg">
               <line x1="40" y1="30" x2="780" y2="30" stroke="grey"/>
           </svg>
       </div>
    )
};


export default Friend;