import ReactDOM from 'react-dom';
import './index.css';
import React, { useRef } from 'react';


function App() {

    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();

        const soundValue = sound.current.value;
        const colorValue = color.current.value;
        alert(`${soundValue} sounds like ${colorValue}`);
        sound.current.value = "";
        color.current.value = "";
    }

    return(
      <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder='Sound...'/>
        <input ref={color} type="color"/>
        <button>ADD</button>
      </form>
      </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

