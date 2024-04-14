

import './App.css';
import React from 'react';


export default function App() {
 const [data, setData] = React.useState({})
 const [count, setCount] = React.useState(1);

 //save data from api to state
 React.useEffect(()=>{
  fetch(`https://swapi.dev/api/people/${count}`)
    .then(res=>res.json())
    .then(data=>setData(data))
},[count])

function addChraracter(){
  setCount(prev=>prev+1)
}
  return (
      <div>
        <pre>{JSON.stringify(data,null,2)}</pre>
        <button onClick={addChraracter}>Get Next Character</button>
      </div>
  )
}
//dependencies array





