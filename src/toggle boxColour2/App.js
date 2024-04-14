
import React from 'react'
import './App.css';
import Box from './data'
import Boxes from './box'

export default function App() {

const [squares, setSquares] = React.useState(Box)

function toggle(id){
 setSquares(prevSquares =>{
  return prevSquares.map((square)=>{  //here square is one single item of the prevSquares(Box)
    return square.id === id? {...square,on : !square.on} : square
  })
 })
}


const squareElements = squares.map(square =>(
  
       <Boxes key={square.id} 
              id={square.id} 
              on={square.on} 
              toggle={toggle}/>
    ))
 



  return (
    <div className="App">
      {squareElements}
   
    </div>
  )
  }


