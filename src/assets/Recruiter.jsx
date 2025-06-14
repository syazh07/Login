import React, { useState } from 'react'
import { FaBuilding,FaTrashAlt } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange , MdEdit } from "react-icons/md";
import "./Recruiter.css"
import { useNavigate } from 'react-router-dom';

const currentRecruiterCompany = "CodeTech Pvy Ltd";
const Jobs =[
  
  {
    id:1,
    title:"Frontend Developer",
    company:"CodeTech Pvy Ltd",
    salary:"₹6-7 LPA",
    location:"Chennai",
    date:"09 May 2025",
  },
  {
    id:2,
    title:"UI/UX Designer",
    company:"DesignHub",
    salary:"₹4-6 LPA",
    location:"Bangalore",
    date:"08 May 2025",
  },
  {
    id:3,
    title: "Full Stack Developer",
    company: "TechNova Solutions",
    salary: "₹10-14 LPA",
    location: "Bangalore",
    date: "05 May 2025",
  },
  ];

const Recruiter = () => {
  const navigate=useNavigate()
   const[post,setPost]=useState(Jobs);
   const[editId,setEditId]=useState(null);
   const[form,setForm]=useState({
        title:" ",
        company:" ",
        salary:" ",
        location:" ",
        date:" ",
   });

   
   const handleEdit=(job)=>{

       if (job.company === currentRecruiterCompany) {
      setEditId(job.id);
      setForm({ ...job });
    } else {
      alert("You are not authorized to edit this job.");
    }
   };

   const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
   };
   const handleUpdate=(job)=>{
    const update = post.map((job)=>job.id == editId ? {...form,id:job.id} : job);
    setPost(update);
    setEditId(null);
    setForm({
       title:" ",
        company:" ",
        salary:" ",
        location:" ",
        date:" ",
    });

   };

   const handleDelete = (id)=>{
     if (job.company === currentRecruiterCompany) {
    const update = post.filter((job)=>job.id!==id);
    setPost(update);
     }
     else{
       alert("You are not authorized to delete this job.");
     }
   }

  return (
    <>
       <div className='recruiter'>
        <h1>Recruiter Dashboard</h1>
        <button className="btn" >Post a job
        </button>
       </div>
      {editId &&(
        <div className="edit-container">
              <label> Title: </label>
                <input type="text" name="title" value={form.title} onChange={handleChange} />
             
              <label>Company: </label>
                  <input type="text" name="company" value={form.company} onChange={handleChange}/>              
              <label>Salary:</label>
                  <input type="text" name="salary" value={form.salary} onChange={handleChange}/>     
              <label>Location: </label>         
                  <input type="text" name="location" value={form.location} onChange={handleChange}/>  
              <label>Posted On: </label> 
                  <input type="text" name="date" value={form.date} onChange={handleChange}/>  
              <button className='save' onClick={handleUpdate}>
                      Save
              </button>            

        </div>           
      )}

       <div className="job">
         {post.map((job)=>(
           <div className="list" key={job.id}>
               <h2>{job.title}</h2>
               <p><FaBuilding /><b>Company:</b>{job.company}</p>
               <p><RiMoneyRupeeCircleFill /><b>Salary:</b>{job.salary}</p>
               <p><MdLocationPin /><b>Location:</b>{job.location}</p>
               <p><MdDateRange /><b>Posted On:</b>{job.date}</p>
                {job.company === currentRecruiterCompany && (
               <div className="btn-container" > 
                  <button className="btn-edit" onClick={()=>handleEdit(job)}><MdEdit />Edit</button>
                  <button className="btn-del" onClick={()=>handleDelete(job.id)}><FaTrashAlt />Delete</button>
               </div>
                )}
              

           </div>
         ))}
         
       
       </div>
      </>
  )
}

export default Recruiter
