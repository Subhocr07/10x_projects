import React from 'react';
import "./postview.css";
import {Link} from 'react-router-dom';
import axios from "axios";
// import fst_post from "../assets/1st_post.png";
import {useEffect,useState } from 'react';
import {AiFillCamera} from "react-icons/ai"
import instaclonelogo from"../assets/instaclone_logo.png"
import instaclone_logo1 from "../assets/instaclone_logo1.png";
// import {BsThreeDots,BsHeart} from "react-icons/bs"
// import {FiSend} from "react-icons/fi"

const Postview = () => {
  const [userData, setUserData]=useState([]);
  useEffect(()=>{//to get image data for now
    axios.get("http://localhost:8080/postall").then((imageData)=>{
          console.log(imageData.data.images)
          setUserData(imageData.data.images)
    })
  },[])



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
                          <img src={user.image} alt="avatar"key={i} ></img>
                        
                          // <div className="postview_post_container" key={i}>
                          //     <div className='first_row'>
                          //         <div className="user_details">
                          //           <h5>{user.author}</h5>
                          //           <h5>{user.location}</h5>
                          //         </div>
                          //         <div className="three_dot">
                          //           <a href="#t"><BsThreeDots/></a>
                          //         </div>
                          //     </div>

                          //     <div className="post_img">
                          //       <img src={user.image} alt="post_img" />
                          //     </div>

                          //     <div className="date_icon">
                          //       <a href="#r"><BsHeart/></a>
                          //       <a href="#share"><FiSend/></a>
                          //     </div>
                          //     <div className='postview_description'>
                          //         <h1>{user.description}</h1>
                          //     </div>
                          //     <div className="date">
                          //         <h1>{user.date}</h1>
                          //     </div>
                          // </div>
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
