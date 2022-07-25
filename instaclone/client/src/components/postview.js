import React from 'react';
import "./postview.css";
import {Link} from 'react-router-dom';
import fst_post from "../assets/1st_post.png";
import {useEffect,useState } from 'react';
import instaclonelogo from"../assets/instaclone_logo.png"

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
      <div className="container">
        <header>
          <div className="nav">
              <img src={instaclonelogo} alt="logo" />
              <img src="" alt="name" />
              <Link to="/createpost" target='__blank' ><img src="" alt="camera"/></Link>
          </div>
          <hr />
          <div className="post_container">
              <div className="user_details">
                <h5>Name</h5>
                <h5>Location</h5>
              </div>
              <div className="three_dot">
                <img src="" alt="three_dot" />
              </div>
              <div className="post_img">
                <img src={fst_post} alt="post_img" />
              </div>
              <div className="date_icon">
                <img src="" alt="love-react" />
                <img src="" alt="share" />
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
