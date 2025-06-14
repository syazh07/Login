import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Post.css'

const Post = () => {
  const navigate=useNavigate()
  const[form,setForm]=useState({
          title:" ",
          company:" ",
          salary:" ",
          location:" ",
          date:" ",
     });
     const[save,setSave]=useState()

   const handleSubmit=(e)=>{
       e.preventDefault();
       const job={...form,id:Date.now()};
       navigate("/recruiter")
       

   }

  return (
    <div className='post'>
      <form onSubmit={handleSubmit}>
        <label> Title: </label>
                <input type="text" placeholder="Enter your job title"  /><br/><br/>
             
              <label>Company: </label>
                  <input type="text" placeholder="Enter your Company name" /> <br/> <br/>            
              <label>Salary:</label>
                  <input type="number" placeholder="Enter the salary provided" /> <br/> <br/>   
              <label>Location: </label>         
                  <input type="text" placeholder="Enter company location" /> <br/><br/> 
              <label>Posted On: </label> 
                  <input type="date" placeholder="date" />  <br/><br/>
              <button className="save" type="submit" > 
                      Save
              </button>  
      </form>
       
    </div>
  )
}

export default  Post
