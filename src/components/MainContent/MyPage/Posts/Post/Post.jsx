import React from "react";

import PostStyle from './PostStyle.module.sass';

const Post = (props) => {
    return(
        <div className={PostStyle.post}>
            <div className={PostStyle.info}>
                <div className={PostStyle.logo}>
                    <a href="">
                        {props.avatar}
                    </a>
                </div>
                <div className={PostStyle.name}>
                    <a href="#">{props.name}</a>
                    <a href="#">{props.time}</a>
                </div>
                <div className={PostStyle.dropDown}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/dropdown-menu-1614249-1368951.png" alt=""/>
                </div>
                <div className={PostStyle.dropContent}>
                    <div className={PostStyle.dropWrap}>
                        <div>Удалить запись</div>
                        <div>Архивировать запись</div>
                        <div>Сохранить  в закладках</div>
                        <div>Закрепить</div>
                        <div>Выключить комментарии</div>
                    </div>
                </div>
            </div>
            <div className={PostStyle.content}>
                <span className={PostStyle.title}>{props.text}</span>
                {props.img}
            </div>
            <div className={PostStyle.actions}>
                <div className={PostStyle.like}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="30" height="30"
                         viewBox="0 0 50 50"
                         style={{fill:"#808080"}}>
                        <path d="M 15 7 C 7.832031 7 2 12.832031 2 20 C 2 34.761719 18.695313 42.046875 24.375 46.78125 L 25 47.3125 L 25.625 46.78125 C 31.304688 42.046875 48 34.761719 48 20 C 48 12.832031 42.167969 7 35 7 C 30.945313 7 27.382813 8.925781 25 11.84375 C 22.617188 8.925781 19.054688 7 15 7 Z M 15 9 C 18.835938 9 22.1875 10.96875 24.15625 13.9375 L 25 15.1875 L 25.84375 13.9375 C 27.8125 10.96875 31.164063 9 35 9 C 41.085938 9 46 13.914063 46 20 C 46 32.898438 31.59375 39.574219 25 44.78125 C 18.40625 39.574219 4 32.898438 4 20 C 4 13.914063 8.914063 9 15 9 Z"></path>
                    </svg>
                    <span>{props.likes}</span>
                </div>
               <div className={PostStyle.comment}>
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 50 50"
                        style={{fill:"#808080"}}>
                       <path d="M 7 4 C 4.253906 4 2 6.253906 2 9 L 2 33 C 2 35.746094 4.253906 38 7 38 L 11.09375 38 C 11.230469 39.203125 11.214844 40.316406 10.90625 41.25 C 10.527344 42.398438 9.820313 43.363281 8.5 44.15625 C 8.128906 44.390625 7.957031 44.839844 8.070313 45.261719 C 8.183594 45.683594 8.5625 45.984375 9 46 C 13.242188 46 18.105469 43.785156 20.5625 38 L 43 38 C 45.746094 38 48 35.746094 48 33 L 48 9 C 48 6.253906 45.746094 4 43 4 Z M 7 6 L 43 6 C 44.65625 6 46 7.34375 46 9 L 46 33 C 46 34.65625 44.65625 36 43 36 L 20 36 C 19.582031 36 19.207031 36.261719 19.0625 36.65625 C 17.507813 40.898438 14.730469 42.917969 11.84375 43.65625 C 12.234375 43.097656 12.605469 42.507813 12.8125 41.875 C 13.332031 40.296875 13.289063 38.570313 12.96875 36.8125 C 12.878906 36.347656 12.476563 36.007813 12 36 L 7 36 C 5.34375 36 4 34.65625 4 33 L 4 9 C 4 7.34375 5.34375 6 7 6 Z"></path>
                   </svg>

               </div>
                <div className={PostStyle.share}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="30" height="30"
                         viewBox="0 0 50 50"
                         style={{fill:"#808080"}}>
                        <path d="M 28 3.59375 L 28 14.0625 C 13.863281 14.414063 6.625 21.742188 3.21875 29.0625 C -0.226563 36.460938 -0.0078125 43.710938 0 43.90625 C 0 43.90625 0 43.9375 0 43.9375 C 0 43.9375 0 44.03125 0 44.03125 L 2 44.0625 C 2 44.0625 2.320313 39.644531 5.8125 35.125 C 9.203125 30.738281 15.660156 26.347656 28 26.09375 L 28 36.40625 L 29.59375 35.1875 L 48.59375 20.8125 L 49.65625 20 L 48.59375 19.1875 L 29.59375 4.8125 Z M 30 7.625 L 46.34375 20 L 30 32.375 L 30 24 L 29 24 C 15.449219 24 8.070313 28.894531 4.21875 33.875 C 3.71875 34.519531 3.417969 35.144531 3.03125 35.78125 C 3.480469 33.917969 4.085938 31.96875 5.03125 29.9375 C 8.289063 22.9375 14.832031 16 29 16 L 30 16 Z"></path>
                    </svg>
                </div>

            </div>
        </div>
    )
};

export default Post;