import React, { useState } from 'react';
import './App.css';
import ToolsGrid from './containers/body/ToolsGrid';
import ToolContainer from './containers/body/ToolContainer';
import NavBar from './containers/NavBar/NavBar';
import MainBody from './containers/body/MainBody';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <MainBody/>
    </div>
  );
}

export default App;
