import React from 'react'
import "./landing.css";
import Landing_img from "../assets/landing img.png";
import {Link} from 'react-router-dom'

const Landing = () => {
  

  return (
    <div className='container'>
      <div className="img_container">
        <img src={Landing_img} alt="Landing_img"/>
      </div>
      <div className="button_conatiner">
        <h1>10x Team 04</h1>
        <Link to='/postview' target="__blank" ><button >Enter</button></Link>
      </div>
      
    </div>
  )
}

export default Landing;
