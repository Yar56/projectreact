import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';
import './../MainContent/twocolumn/twoColumnStyle.sass';

import Navigation from './Navigation/Navigation';

import {BrowserRouter, Route} from 'react-router-dom';
import MessagesContainer from "./twocolumn/Messages/MessagesContainer";
import FindUsersContainer from "./FindUsers/FindUsersContainer";
import MyPageContainer from "./MyPage/MyPageContainer";

const MainContent = (props) => {
    return (
        <BrowserRouter>
            <main className={MainContentStyle.mainContent}>
                <Navigation/>
                <div className={MainContentStyle.pages}>
                    <Route path='/profile' render={() => <MyPageContainer/>}  />
                    <div className="twoColumn">
                        {/*<Route path='/news' render={() => <News state={props.state}/>}/>*/}
                        <Route path='/dialogs' render={() => <MessagesContainer  />}/>
                        {/*<Route path='/friends' render={() => <FriendsPage state={props.state}/>}/>*/}
                        <Route path='/social'/>
                    </div>
                    {/*<Route path='/photos' render={() => <Photos state={props.state}/> }/>*/}
                    <Route   path='/findUsers' render={ () => <FindUsersContainer/>} />
                </div>
            </main>
        </BrowserRouter>
    )

};

export default MainContent;