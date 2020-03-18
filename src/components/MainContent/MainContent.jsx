import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';
import './../MainContent/twocolumn/twoColumnStyle.sass';

import Navigation from './Navigation/Navigation';
import MyPage from './MyPage/MyPage';
import Messages from './twocolumn/Messages/Messages';
import News from './twocolumn/News/News';
import FriendsPage from './twocolumn/FriendsPage/FriendsPage';
import {BrowserRouter, Route} from 'react-router-dom';

const MainContent = (props) => {
    return (
        <BrowserRouter>
            <main className={MainContentStyle.mainContent}>
                <Navigation/>
                <div className={MainContentStyle.pages}>
                    <Route path='/tabs' render={() => <MyPage state={props.state}/>}/>
                    <div className="twoColumn">
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/dialogs' render={() => <Messages state={props.state}/>}/>
                        <Route path='/friends' render={() => <FriendsPage/>}/>
                        <Route path='/social'/>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    )
};

export default MainContent;