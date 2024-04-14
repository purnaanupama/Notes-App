
import React from 'react'
import './App.css';
import Box from './data'
import Boxes from './box'

export default function App() {

const [squares, setSquares] = React.useState(Box)

// function toggle(){
//   console.log("clicked");
// }


const squareElements = squares.map(square =>(
  
       <Boxes key={square.id} on={square.on} />
    ))
 



  return (
    <div className="App">
      {squareElements}
   
    </div>
  )
  }


