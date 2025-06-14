import React from 'react';
import App from './App.jsx'
import Login from './assets/Login.jsx'
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Applicant from './assets/Applicant.jsx'
import Recruiter from './assets/Recruiter.jsx'
import Post from './assets/Post.jsx'
import Portal from './assets/Portal.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div id='redirect'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/post-job">Post a Job </Link>
        <Link to="/apply">ApplyNow </Link>
        <Link to="/applicant">Applicant </Link>
        <Link to="/recruiter">Recruiter </Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<App/>}/>
        <Route path="/applicant" element={<Applicant/>}/>
        <Route path="/recruiter" element={<Recruiter/>}/>
        <Route path="/post-job" element={<Post/>}/>
        <Route path="/apply" element={<Portal/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
