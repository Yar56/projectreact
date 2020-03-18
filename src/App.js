import React from 'react';
import './App.sass';

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';





const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header />
        <MainContent state={props.state}/>
    </div>

  );
};




export default App;
