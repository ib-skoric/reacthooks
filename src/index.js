import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaStar } from 'react-icons/fa'

const createArray = (length) =>
    [...Array(length)]
;

const Star = ({ selected = false, onSelect }) => {
    return(
        // add an onclick behaviour that calls the on select function from below, which updates the number of stars selected
        <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
        )
}

// use total stars (props.totalStars) and if nothing is passed use 5 as default
const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    
    return (
        <>
        {/*    Map over the array and create a star element for each and give it an iterator/index of i */}
        {createArray(totalStars).map((n,i) => (<Star key={i}
                                                       // check if number of selected stars is greater than iterator num, returns true or false
                                                       selected={selectedStars > i}
                                                       // pass the onselect as prop to the stars and add 1 to the selected stars if a star element is selected
                                                        // this is because of 0 indexing
                                                       onSelect={() => setSelectedStars((prevState) => i+1)}/>))}
        </>)
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

