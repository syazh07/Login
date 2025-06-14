import React, { useState } from 'react'
import "./Applicant.css"
import { FaBuilding } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { MdDateRange } from "react-icons/md";



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

const Applicant = () => {
  const[role,setRole]=useState("")

  const filteredJobs = role
    ? Jobs.filter((job) =>
        job.title.toLowerCase().includes(role.toLowerCase())
      )
    : Jobs;
    const handleApply = (jobId) => {
  alert(`You applied to job with ID: ${jobId}`);
  
  let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  if (!appliedJobs.includes(jobId)) {
    appliedJobs.push(jobId);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
  }
};
  
  return (
    <>
    <div className='search'>
      <input type="text" placeholder="🔍Search for Jobs..." checked={role==="title"} onChange={(e)=>{setRole(e.target.value)}}/>
      <select onChange={(e)=>{setRole(e.target.value)}}>
        <option value="" >All Categories </option>
        <option value="Frontend Developer" >Frontend Developer</option>
        <option value="Full Stack Developer" >Full Stack Developer</option>
        <option value="UI/UX Designer" >UI/UX Designer</option>
      </select>
    </div>
    <div className="job">
      {filteredJobs.map((job)=>(
        <div className="list" key={job.id}>
            <h2>{job.title}</h2>
            <p><FaBuilding /><b>Company:</b>{job.company}</p>
            <p><RiMoneyRupeeCircleFill /><b>Salary:</b>{job.salary}</p>
            <p><MdLocationPin /><b>Location:</b>{job.location}</p>
            <p><MdDateRange /><b>Posted On:</b>{job.date}</p>
            <button className="button-container" onClick={() => handleApply(job.id)}>Apply</button>
        </div>
      ))}
      
    
    </div>
   </>
  )
}

export default Applicant
