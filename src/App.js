import React from 'react';
import './App.sass';

import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';





const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <MainContent />
    </div>

  );
};




export default App;
