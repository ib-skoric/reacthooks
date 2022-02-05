import ReactDOM from 'react-dom';
import './index.css';
import React, { createContext, useContext } from 'react';
import App from './App';


ReactDOM.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>,
  document.getElementById('root')
);

