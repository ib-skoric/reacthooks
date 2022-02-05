import { useContext } from 'react';
import {TreesContext} from './';
import {useTrees} from './index'

function App() {

  const {trees} = useTrees();
  

  return( 
  <>
    <h1>Trees i've heard of:</h1>
    <ul>
      {trees.map((tree) => (
        <li key={tree.id}>{tree.type}</li>
      ))}
    </ul>
  </>
  )
}

export default App;