import ReactDOM from 'react-dom';
import './index.css';
import React, { useEffect, useState } from 'react';


function App() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users`).then(response => response.json())
        .then(response => setData(response));
    }, [])

    if (data) {
        return(
            <div>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        {user.login}
                    </li>
                ))}
            </ul>
            <button onClick={() => setData([])}>Remove data</button>
            </div>
           
        )
    }

    return (
        <p>No users.</p>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

