
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import "./Login.css";
const Login = () => {
    const navigate =useNavigate();
    const [action,setAction]=useState("Login");
    const[role,setRole]=useState("");
    const[gender,setGender]=useState("");
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[mail,setMail]=useState("");
    const[num,setNum]=useState("");
    const[error,setError]=useState("");
    
    const handleLogin = (user) => {
        if (user.role === "Applicant") {
            navigate("/applicant");
        } else if (user.role === "Recruiter") {
            localStorage.setItem("recruiterCompany", user.name);
            navigate("/recruiter");
        } else {
            navigate("/");
        }
        };

    const handleSubmit =(e)=>{

        if(!mail || !password || !name || !num || !role || !gender ){
            setError("Enter the Details");
            return;
        }
        const mailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!mailRegex.test(mail)){
            setError("Invalid email");
            return;
        }
        if(action=="Sign Up"){
            if(!name){
                setError("Username is required");
                return;
            }
            if(!role){
                setError("Please select a role");
                return;
            }
            if(!gender){
                setError("Please select your gender");
                return;
            }
            if(!num || num.length!==10){
                setError("Enter a valid 10-Digit phone number");
                return
            }
            if(!password || password.length!==8){
                setError("Password must contain 8 characters");
                return;
            }
            const userData = {
                        name,
                        mail,
                        password,
                        role,
                        gender,
                        num
    };
      
                localStorage.setItem("user", JSON.stringify(userData));
                setAction("Login");
                handleLogin(userData);
                return;
        }
        if (action === "Login") 
        {
                const storedUser = JSON.parse(localStorage.getItem("user"));
           if (!storedUser || storedUser.mail !== mail || storedUser.password !== password)
             {
                setError("Invalid Email or Password");
                return;
             }
              if (storedUser.role === "Applicant") {
                    navigate("/applicant");
                } 
                else if (storedUser.role === "Recruiter") {
                localStorage.setItem("recruiterCompany", storedUser.name);
                navigate("/recruiter");
                } 
                else {
                navigate("/");
                }

          }
      

   };
   
   
  return (
    <div className="login-box">
            <div className="card">
                  <form onSubmit={handleSubmit}>

                <h1><u>{action}</u></h1>
                {action ==="Sign Up"&&(
                <div className="inputs">
                    <input type ="text"  placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                </div>
                )}
                {action==="Sign Up"&&(
                <div className="box-container">
                     <label>
                         <input type="radio" name="role" value="Applicant" required checked={role==="Applicant"} onChange={()=>{setRole("Applicant")}}/>Applicant
                     </label>
                      <label>
                         <input type="radio" name="role" value="Recruiter" required checked={role==="Recruiter"} onChange={()=>{setRole("Recruiter")}}/>Recruiter
                     </label>
                </div>
                )}
               
                <div className="input1">
                     <input type ="email"  placeholder="E-mail" value={mail} onChange={(e)=>{setMail(e.target.value)}}/><br/>
                </div>
                <div className="input2">
                    <input type="password"  placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                </div>
                 {action==="Sign Up"&&(
                <div className="input3">
                     <input type="tel"  placeholder="PhoneNumber" value={num} onChange={(e)=>{setNum(e.target.value)}}/><br/>
                </div>
                 )}
                {action==="Sign Up"&&(
                <div className="gender-box">
                     <label>
                          <input type="radio" name="gender" value="Male" required checked={gender==="Male"} onChange={()=>{setGender("Male")}}/>Male
                     </label>
                      <label>
                          <input type="radio" name="gender" value="Female" required checked={gender==="Female"} onChange={()=>{setGender("Female")}}/>Female
                     </label>
                      <label>
                          <input type="radio" name="gender" value="Other" required checked={gender==="Other"} onChange={()=>{setGender("Other")}}/>Other
                     </label>
                     
                </div>
                )}
                
                {error && <p className="error-message">{error}</p>}
                
                <div className="submit">
                            
                                  <div className="submit-btn" onClick={handleSubmit}>
                                      {action === "Sign Up" ? "Create an Account " : "Login"}
                                  </div>
                                    
                </div>
                
                {action==="Login" ?(
                    <>
                    <br/>
                    <a href ="#" >Forgot Password?</a>
                <p>Don't have an Account?</p>
                <a href="#" onClick={()=>{setAction("Sign Up")}}>Register</a> 
                    </>
                ):(
                    <a href ="#" onClick={()=>{setAction("Login")}}>Back to Login</a>
                )
                }
               </form>
            </div>

        </div>
  )
}

export default Login