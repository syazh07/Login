import React from 'react'
import about from '../assets/about4.png'
import './About.css'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-left'>
            <img src={about} alt='about-img' />
        </div> 
        <div className='about-right'>
            <h3>About Us</h3>
            <h2>Welcome to Carrer Connect</h2>
            <p>
                your ultimate partner in career growth and professional development. Our mission is to bridge the gap between talented 
                individuals and the opportunities they deserve. Whether you're a fresh graduate, a seasoned professional, or a career switcher,
                 Carrer Connect is dedicated to empowering your journey with expert guidance, industry insights, and a comprehensive platform 
                 to explore, learn, and connect.
            </p>
            <p>
               At Carrer Connect, we believe that everyone has unique talents and aspirations, 
               and our goal is to help you unlock your full potential. From personalized job recommendations 
               and skill-building resources
               to industry news and networking opportunities, 
               we are committed to supporting your career ambitions every step of the way.
            </p>
            <p>
                Join our community today and take the next step towards a brighter, 
                more fulfilling future. Your dream career is just a connect away!


            </p>
        </div>
    </div>
  )
}

export default About

            