import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa'

const createArray = (length) =>
    [...Array(length)]
;

const Star = ({ selected = false }) => {
    return(
        <FaStar color={selected ? "red" : "gray"}/>
    )
}

// use total stars (props.totalStars) and if nothing is passed use 5 as default
const StarRating = ({ totalStars = 5 }) => {
    return createArray(totalStars).map((n,i) => (<Star key={i}/>))
}

function App() {
    return (
        <StarRating totalStars={10}/>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

