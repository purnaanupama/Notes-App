import './App.css';
import React from 'react';
import {useRef} from 'react';
import {FaWindowClose,FaSearch} from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {HiPlus} from 'react-icons/hi'
import {BiSolidEdit} from 'react-icons/bi'

export default function App() {
const [show,setShow] = React.useState(false);
const [todos, setTodos] = React.useState([]);  //array of objects which contains the to do details
const [todo, setTodo] = React.useState(""); //saves the current to do in this
const [todoEditing, setTodoEditing] = React.useState("");
const [editingText, setEditingText] = React.useState();
const [fake,setFake] = React.useState([]);
const [search,setSearch] = React.useState("");

//creating new note
function handleSubmit(e){
 e.preventDefault();
if(todo === ""){   //taking in new note details to an object
  //do nothing
}else{
  const newTodo = {
    id: new Date().getTime(),  //this makes the id unique
    text : todo,
    completed : false,
    
}
    setTodos([...todos].concat(newTodo))  //this adds our new note to our todos array
    setTodo("")
    setFake([...fake].concat(newTodo))
    console.log(fake);
}
   }

//delete a todo
function deleteTodo(id){
  const updateSate = [...todos].filter((todo)=> todo.id !== id)
  setTodos(updateSate)
   return todo
}

//check finished notes
function toggleCompleted(id){
  const updatedTodos = [...todos].map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
}

//edit the created note
function editTodo(id){
const updatedTodo = [...todos].map((todo)=>{
    if(todo.id===id && editingText){
            todo.text = editingText
        }
       return todo
  })
  setTodos(updatedTodo)
  setTodoEditing(null)
  setEditingText("");
}

//cancel new chanes in the note
function CancelEdit(id){
  const updatedTodo = [...todos].map((todo2)=>{ 
  if(todo2.id === id){
   setEditingText(todo2.text);
   setTodoEditing(null)
  }
  return todo2
})
setTodos(updatedTodo);
}

//show or hide create new note
function Showfunc(){
  setShow(prev => !prev);
}

//setting up local storage
React.useEffect(()=>{   
  const savedNotes= JSON.parse(  
    localStorage.getItem('react-notes-app-data')
    );
  if(savedNotes){
    setTodos(savedNotes);
  } 
},[]);

React.useEffect(()=> {   
localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(todos)
    );
  },[todos]); 

//stop the first render of useEffect hook and then run the function 
const didMount = useRef(false);
React.useEffect(()=>{
    if(didMount.current){
      Showfunc();
    }else{
      didMount.current = true;
    }
    
  },[fake])

  function handleChange2(event){
    setSearch(event.target.value)
 }
 const searchText =  todos.filter((todo)=>
  todo.text.toLowerCase().includes(search))
console.log(searchText)

return (
   <div className='container'>
    <div className='header'>
     <h1>Notes App</h1>
     <button className='btn-main' onClick={Showfunc} type='button'>Create New Note  <HiPlus className='plus'/></button>
     <div className='cont'><FaSearch className='glass'/><input 
                                                        className='search' 
                                                        type='text' 
                                                        placeholder='Search Notes...'
                                                        onChange={handleChange2}/></div>
    </div>
    
  
      <div className='App'>  
     
       
      <form onSubmit={handleSubmit}>



{show && 
 <div className='EditBar'>
     <div className='EditBarIn'>
         <FaWindowClose className='close' onClick={Showfunc}/>
         <h3>Create New Note</h3>
         <div className='textbox'>
             <textarea 
                 rows={13} cols={55}
                 onChange={(e)=>setTodo(e.target.value)} 
                 value={todo}/> 

         <div className='buttonbox'>
             <button className='btn' type='submit'>Add New Note</button> 
             <button className='btn' type='button' onClick={Showfunc}>Close Note</button>
         </div>
        </div>
     </div> 
  </div>


} 

</form> 
      
<div className='notes-list'> 
{searchText.map(todo =><div key={todo.id}>  {/* take the todos array map it an output as jsx,here todo means one object in the array */}
       

        {todoEditing === todo.id  ? 
        
           (<div className='EditBar'>
          <div className='EditBarIn'>
           <FaWindowClose className='close' onClick={()=>CancelEdit(todo.id)}/>
          <h3>Edit Notes</h3>
          <div className='textbox'>
          <textarea 
              rows={13} cols={55}
              onChange={(e)=>setEditingText(e.target.value)}
              onFocus={(e) =>setEditingText(e.target.value) }
              defaultValue={todo.text}/> 
           <div className='buttonbox'>
           <button className='btn' onClick={()=>editTodo(todo.id)}>Submit Edits</button>
          <button className='btn' onClick={()=>CancelEdit(todo.id)}>Cancel Edits</button> 
           </div>
          
          </div>
          
         </div> 
         </div>
        ):(
          <div></div>
        )}
        
        <div className='note'>
        <div>{todo.text}</div>
        
        <div className='btn-container'>
          <RiDeleteBin5Fill onClick={()=> deleteTodo(todo.id)} className='alter'/>
          <BiSolidEdit onClick={()=>setTodoEditing(todo.id)} className='alter2'/>
           {/*onclick run the function deleteTodo passing the value id of one todo as parameter to the function */}
       
       
          </div>
       </div>
      

        </div>)} 
        </div>   
      </div>
   </div>  
   
  )
}
//dependencies array





