import React from "react";
import './FriendsPageStyle.sass';

const Friend = () => {
    return(
       <>
           <div>
               <img src="https://img.icons8.com/emoji/48/000000/boy-medium-light-skin-tone.png" alt=""/>
           </div>
           <div>
               <a href="">Никита Валеев</a>
               <span>Описание</span>
               <a href="">Написать сообщение</a>
           </div>
           <div>
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
           <svg viewBox="100 10 800 40" width="600px" xmlns="http://www.w3.org/2000/svg">
               <line x1="60" y1="30" x2="930" y2="30" stroke="grey"/>
           </svg>
       </>
    )
};


export default Friend;