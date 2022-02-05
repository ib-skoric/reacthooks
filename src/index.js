import ReactDOM from 'react-dom';
import './index.css';
import { useFetch } from './useFetch';

function App({ login }) {
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`)
  
  if (loading) return (<h1>Loading data...</h1>);
  if (error) return (<pre>{JSON.stringify(error, null, 2)}</pre>);
  return (
    <div>
      <img src={data.avatar_url} />
      <p>{data.login}</p>
    </div>
  )
}

ReactDOM.render(
    <App login="ib-skoric" />,
  document.getElementById('root')
);

