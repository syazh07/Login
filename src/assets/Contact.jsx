import React from 'react'
import contact1 from '../assets/contact4.png'
import contact2 from '../assets/contact5.png'
import contact3 from '../assets/contact6.png'
import './Contact.css'
const Contact = () => {

  return (
    <div className='cf' id="contact"><h2 className='c'>Contact-us</h2>
    <div className='con'>
        
      <div className='contact-left'>
        <a href="tel:+9150898982"><img src={contact1}/></a>
        <h3>Call</h3>
        <p>98150 58953</p>
      </div>
      <div className='contact-middle'>
            <a href="mailto:summafake123@gmail.com?"><img src={contact2}/></a>
            <h3>Mail</h3>
            <p>abcd@gmail.com</p>
      </div>
      <div className='contact-right'>
            
            <a href='https://maps.app.goo.gl/2LgUJ6shUZAC49C28' ><img src={contact3}/></a>
            <h3>Location</h3>
            <p>85/2 ghandi nagar,cross-cut road , Coimbatore</p>
      </div>
    </div>
    </div>
  )
}

export default Contact
