import React from 'react'

export default function Box(props){

const [on,setOn] = React.useState(props.on)

function toggle(){
    setOn(prevon => !prevon)
}

const styles ={
    backgroundColor : on ? "#222222" : "transparent"
}

    
    return(
    
       <div style={styles} className='box' onClick={toggle}></div>
     
    )
}