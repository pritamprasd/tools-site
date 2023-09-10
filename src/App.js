import React from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import MainBody from './containers/MainBody';

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <MainBody/>
    </div>
  );
}

export default App;
