import React from 'react'
import "./Portal.css"

const Portal = () => {
  return (
   <>
   <form id="f">
        Name : <input id="n"type="text" placeholder='Entre your name'></input><br/><br/>
        Email: <input id="e"type="email" placeholder='Entre your email'></input><br/><br/>
        Resume: <input id="r" type="file" name="resume" accept=".pdf,.doc,.docx" /><br /><br />
        <p>Few words about yourself</p>
        <textarea placeholder='Start' id="a" rows="4"></textarea>
        
        <button type="submit" id="s">Submit</button>
   </form>
   </>
  )
}

export default Portal