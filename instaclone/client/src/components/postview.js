import React from 'react';
import "./postview.css";
import {Link} from 'react-router-dom';
import axios from "axios";
import {useEffect,useState } from 'react';
import {AiFillCamera} from "react-icons/ai"
import instaclonelogo from"../assets/instaclone_logo.png"
import instaclone_logo1 from "../assets/instaclone_logo1.png";
import {BsThreeDots,BsHeart} from "react-icons/bs"
import {FiSend} from "react-icons/fi"

//////////////////////////////////////////////////////////////////////////

const Postview = () => {
  const [userData, setUserData]=useState([]);
  /////////////////fetch Data from Backend/////////////////////////////
  useEffect(()=>{//to get image data for now
    axios.get("https://instaclone-10x-server-1.herokuapp.com/postall").then((imageData)=>{
          setUserData(imageData.data.imageData)
    });
  },[])


/////////////////////////////Posteverything////////////////////////////////////
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
                  <Link to="/createpost" target='__blank' id='createpost_link_img' ><AiFillCamera/></Link>
              </div>
          </div>

          <hr />
          
          
            <div>


                {
                    userData.map((user,i)=>{

                        return(
                          
                          
                        
                          <div className="postview_post_container" key={i}>
                              <div className='first_row'>
                                  <div className="user_details">
                                    <p id='post_author'>{user.author}</p>
                                    <p id='post_location'>{user.location}</p>
                                  </div>
                                  <div className="three_dot">
                                    <a href="#t"><BsThreeDots/></a>
                                  </div>
                              </div>

                              <div className="post_img">
                                <img id='post_img' src={user.image} alt="post_img" />
                              </div>

                              <div className="date_icon">
                                <a href="#r"><BsHeart/></a>
                                <a href="#share"><FiSend/></a>
                              </div>
                              <div className='postview_description'>
                                  <p id='description'>{user.description}</p>
                              </div>
                              <div className="date">
                                  <p id='date'>{user.date}</p>
                              </div>
                          </div>
                        );


                    })

                };

            </div>

          
          
        </header>
      </div>
    </div>
  )
}

export default Postview;
