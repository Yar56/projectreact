import React from 'react';
import './App.sass';


import MainContent from './components/MainContent/MainContent';
import HeaderContainer from "./components/Header/HeaderContainer";





const App = (props) => {
  return (
    <div className='app-wrapper'>
        <HeaderContainer />
        <MainContent state={props.state} dispatch={props.dispatch} store={props.store}/>
    </div>

  );
};




export default App;
