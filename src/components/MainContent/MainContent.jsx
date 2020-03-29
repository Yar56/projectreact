import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';
import './../MainContent/twocolumn/twoColumnStyle.sass';

import Navigation from './Navigation/Navigation';
import MyPage from './MyPage/MyPage';
import Messages from './twocolumn/Messages/Messages';
import News from './twocolumn/News/News';
import FriendsPage from './twocolumn/FriendsPage/FriendsPage';
import Photos from "./Photos/Photos";
import {BrowserRouter, Route} from 'react-router-dom';

const MainContent = (props) => {
    return (
        <BrowserRouter>
            <main className={MainContentStyle.mainContent}>
                <Navigation/>
                <div className={MainContentStyle.pages}>
                    <Route path='/tabs' render={() => <MyPage state={props.state}
                                                              addPost={props.addPost}
                                                              updateTextPost={props.updateTextPost}/>}/>
                    <div className="twoColumn">
                        <Route path='/news' render={() => <News state={props.state}/>}/>
                        <Route path='/dialogs' render={() => <Messages state={props.state}/>}/>
                        <Route path='/friends' render={() => <FriendsPage state={props.state}/>}/>
                        <Route path='/social'/>
                    </div>
                    <Route path='/photos' render={() => <Photos state={props.state}/> }/>
                </div>
            </main>
        </BrowserRouter>
    )
};

export default MainContent;