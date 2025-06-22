import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate();
  return (
    <div className='hero container' id="home"> 
      <div className='hero-text'>
        <h1>Your Dream Job Awaits—Take the First Step.</h1>
        <p>Find a job that not only pays the bills but also brings fulfillment.
        
        Network with professionals in your desired industry to gain insights.
       
        Be patient and persistent—finding the right job takes time and effort.   

        </p>
        <button className='btn' onClick={()=>navigate("/login")}>Get Started 🡪</button>
      </div>
    </div>
  )
}

export default Hero
