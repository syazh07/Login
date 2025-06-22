
import React from 'react'
import a from '../assets/a.png'
import h from '../assets/hirer.jpg'
import se from '../assets/se.jpg'
import './Card.css'
const Card = () => {
  return (
    <div className='card' id='job'>
    <div>
      <img src={a} alt='applicant'></img>
      <h2>Applicant </h2>
      <p>if you wish to apply for a job login/register here</p>
    </div>
    <div>
      <img src={h} alt='hirer'></img>
      <h2>Hirer </h2>
      <p>Hire the best ones here by clicking the button</p>
    </div>
    <div>
      <img src={se} alt='hirer'></img>
      <h2>Search jobs </h2>
      <p>Search your jobs in all streams of your wish here</p>
    </div>
    </div>
  )
}

export default Card