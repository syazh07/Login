import React, { useEffect } from 'react'
import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/image1.png'
import m from '../assets/menus2.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    const [col, setCol] = useState(false);
    useEffect(() => {
        
        window.addEventListener('scroll',  () => {
            window.scrollY>50 ? setCol(true) : setCol(false);
        });
    }, [col]);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [mobileMenu,setmobileMenu]=useState(false);
    const toggleMenu=()=>{
        mobileMenu? setmobileMenu(false): setmobileMenu(true);

    }
  return (
    <nav className={`container ${col ? 'dark-nav' : ''}`}>
        <img src={logo} className="Logo" />
<ul className={mobileMenu ? '' : 'hide-mobile-menu'}>         
       <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={()=>navigate("/applicant")} >Jobs</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li><button className='btn'  onClick={() => scrollToSection('contact')}>ContactUs</button></li>
        </ul>
        <img src={m} className='i' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
