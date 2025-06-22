import React from 'react';

import App from './App.jsx'
import Login from './assets/Login.jsx'
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Applicant from './assets/Applicant.jsx'
import Recruiter from './assets/Recruiter.jsx'
import Post from './assets/Post.jsx'
import Portal from './assets/Portal.jsx'
import Hero from "./assets/Hero.jsx"
import Navbar from "./assets/Navbar.jsx"
import About from "./assets/About.jsx"
import Contact from "./assets/Contact.jsx"
import Footer from "./assets/Footer.jsx"
import { JobProvider } from './assets/jobContext'; 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <JobProvider>

    <Router>
      
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/applicant" element={<Applicant/>}/>
        <Route path="/recruiter" element={<Recruiter/>}/>
        <Route path="/post-job" element={<Post/>}/>
        <Route path="/apply" element={<Portal/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/footer" element={<Footer/>}/>

      </Routes>
    </Router>
        </JobProvider>

  </React.StrictMode>,
)
