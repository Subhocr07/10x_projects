import React from 'react'
import "./landing.css";
import Landing_img from "../assets/landing img.png";
import {Link} from 'react-router-dom'

const Landing = () => {
  

  return (
    <div className='landing_container'>
      <div className="landing_img_container">
        <img className='landing_img' src={Landing_img} alt="Landing_img"/>
      </div>
      <div className="landing_button_conatiner">
        <h1 className="heading" >10x Team 04</h1>
        <Link to='/postview' target="__blank" ><button className='home_button' >Enter</button></Link>
      </div>
      
    </div>
  )
}

export default Landing;
