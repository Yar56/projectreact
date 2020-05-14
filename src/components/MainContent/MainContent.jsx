import React from "react";
import MainContentStyle from './MainContentStyle.module.sass';
import './../MainContent/twocolumn/twoColumnStyle.sass';

import Navigation from './Navigation/Navigation';

import {BrowserRouter, Route} from 'react-router-dom';
import MessagesContainer from "./twocolumn/Messages/MessagesContainer";
import FindUsersContainer from "./FindUsers/FindUsersContainer";
import MyPageContainer from "./MyPage/MyPageContainer";
import Login from "./Login/Login";

const MainContent = (props) => {
    return (
        <BrowserRouter>
            <main className={MainContentStyle.mainContent}>
                <Navigation/>
                <div className={MainContentStyle.pages}>
                    <Route path='/profile/:userId?' render={() => <MyPageContainer/>}  />
                    <div className="twoColumn">
                        {/*<Route path='/news' render={() => <News />}/>*/}
                        <Route path='/dialogs' render={() => <MessagesContainer />}/>
                        {/*<Route path='/friends' render={() => <FriendsPage state={props.state}/>}/>*/}
                        <Route path='/social'/>
                    </div>
                    {/*<Route path='/photos' render={() => <Photos state={props.state}/> }/>*/}
                    <Route   path='/findUsers' render={ () => <FindUsersContainer/>} />
                    <Route to='/login'  render={ () => <Login/>}/>
                </div>

            </main>
        </BrowserRouter>
    )

};

export default MainContent;