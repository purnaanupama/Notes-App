

import './App.css';
import React from 'react';


export default function App() {

 //the object name should match the name attribute value in the form jsx

const [formData, setFormData] = React.useState(
  {firstName : "",
   lastName : "",
   email:"",
   comments:"",
   isFriendly : false,
   employement: "",
   favColor : ""
   }
)


function handleChange(event) {
  const{name,value,type,checked} = event.target  //event.target.value,event.target.name all done in this code
setFormData(prev=>{
  return{
     ...prev,
     [name]: type === "checkbox" ? checked : value
  }
})

}
function handleSubmit(event){
 event.preventDefault()
 console.log(formData);
}
  
  return (
    <form onSubmit={handleSubmit}>
     <input type='text' 
     placeholder='First Name'
      onChange={handleChange}
      name='firstName'
      value={formData.firstName}/>

       <input type='text' 
     placeholder='Second Name'
      onChange={handleChange}
       name='lastName'
       value={formData.lastName}/>

       <input type='email' 
     placeholder='E-mail'
      onChange={handleChange}
       name='email'
       value={formData.email}/>   {/*make the component controlled*/}  

       <textarea 
       placeholder='comments'
       name="comments"
       onChange={handleChange}
       value={formData.comments}/>  {/*text areas are self closing*/} 

      <div className='render'>
      <label htmlFor='isFriendly'>Are you Friendly</label>
       <input 
        type='checkbox'
        id='isFriendly'
        onChange={handleChange}
        name="isFriendly"
        checked={formData.isFriendly}
        value={formData.isFriendly}/>
      </div>
      
      <div className='render2'>
        <legend>Current Employement Status</legend>

        <input type='radio' id='part-time' name='employement' value="part-time" 
        onChange={handleChange} checked={formData.employement === "Part-time"}/>
        <label htmlFor='part-time'>Part time</label> <br/>

        <input type='radio' id='full-time' name='employement' value="full-time"
        onChange={handleChange} checked={formData.employement === "full-time"}/>  {/*Must include name and nem should have same value*/} 
        <label htmlFor='full-time'>Full time</label> <br/>

        <input type='radio' id='unemployed' name='employement' value="unemployed"
        onChange={handleChange} checked={formData.employement === "unemployed"}/>
        <label htmlFor='unemployed'>Unemployed</label>
      </div>
      <select id='favColor'
              value={formData.favColor}
              onChange={handleChange}
              name='favColor'>
        <option value="">--choose colour--</option>     
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="white">White</option>
        <option value="brown">Brown</option>
        <option value="purple">Purple</option>
        <option value="black">Black</option>
      </select>
       <button type="submit">Submit</button>  {/*type = "button" will turn it to normal button*/} 
    </form>
  );
}






