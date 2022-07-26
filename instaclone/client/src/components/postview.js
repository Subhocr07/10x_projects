import React from 'react';
import "./postview.css";
import {Link} from 'react-router-dom';
import fst_post from "../assets/1st_post.png";
import {useEffect,useState } from 'react';
import {AiFillCamera} from "react-icons/ai"
import instaclonelogo from"../assets/instaclone_logo.png"
import instaclone_logo1 from "../assets/instaclone_logo1.png";
import {BsThreeDots,BsHeart} from "react-icons/bs"
import {FiSend} from "react-icons/fi"

const Postview = () => {
  const [userData, setUserData]=useState([]);
  useEffect(()=>{
        fetch('http://localhsot:8080/postall').then((data)=>{
            console.log(data)
            return (data.json());
        }).then((userdata)=>{
            setUserData(userdata);
            console.log(userdata);

        })
  },[]);



  return (
    <div>
      <div className="postview_container">
        <header>
          <div className='Navbar'>
              <div className="postview_nav">
                  <img src={instaclone_logo1} alt="logo" />
                  <img src={instaclonelogo} alt="name" />
              </div>
              <div className='postview_camera'>
                  <Link to="/createpost" target='__blank' ><AiFillCamera/></Link>
              </div>
          </div>

          <hr />
          
          <div className="postview_post_container">
              <div className='first_row'>
                    <div className="user_details">
                      <h5>Name</h5>
                      <h5>Location</h5>
                    </div>
                    <div className="three_dot">
                      <a href="#t"><BsThreeDots/></a>
                    </div>
              </div>
              <div className="post_img">
                <img src={fst_post} alt="post_img" />
              </div>
              <div className="date_icon">
                <a href="#r"><BsHeart/></a>
                <a href="#share"><FiSend/></a>
                <div className="date">
                  <h1>Date</h1>
              </div>
          </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Postview;
