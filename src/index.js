import ReactDOM from 'react-dom';
import './index.css';
import React, { useEffect, useState, useReducer } from 'react';


function App() {

    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber,0)

    return (
        <h1 onClick={() => {setNumber(1)}}>{number}</h1>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

