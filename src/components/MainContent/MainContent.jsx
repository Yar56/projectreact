import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';
import './../MainContent/twocolumn/twoColumnStyle.sass';

import Navigation from './Navigation/Navigation';
import TabsContent from './MyPage/TabsContent';
import Messages from './twocolumn/Messages/Messages';
import News from './twocolumn/News/News';
import FriendsPage from './twocolumn/FriendsPage/FriendsPage';
import {BrowserRouter, Route} from 'react-router-dom';

const MainContent = () => {
    return (
        <BrowserRouter>
            <main className={MainContentStyle.mainContent}>
                <Navigation/>
                <div className={MainContentStyle.pages}>
                    <Route path='/tabs' component={TabsContent}/>
                    <div className="twoColumn">
                        <Route path='/news' component={News}/>
                        <Route  path='/dialogs' component={Messages}/>
                        <Route path='/friends' component={FriendsPage}/>
                        <Route path='/social'/>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    )
};

export default MainContent;