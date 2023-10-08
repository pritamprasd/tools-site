import React from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import MainBody from './containers/MainBody';
import { GlobalStateProvider } from './store/globalVars';

export default function App() {
  return (
    <GlobalStateProvider>
      <div className='app'>
        <NavBar />
        <MainBody />
      </div>
    </GlobalStateProvider>
  )
}
