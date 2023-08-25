import React from 'react';
import './App.css';
import { Grommet } from 'grommet';

const App = () => {
  const darkTheme = {
    global: {
      colors: {
        background: '#1E1E1E',
        text: '#FFFFFF',
      },
    },
  };
  return (
    <Grommet theme={darkTheme} full>
      <h1>Hello</h1>
      Sint reprehenderit in dolore reprehenderit aliqua nisi et pariatur.
    </Grommet>
  );
}

export default App;
