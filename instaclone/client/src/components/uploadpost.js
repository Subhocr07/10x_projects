import axios from 'axios';
import { useState } from 'react';
// import {useState} from "react";
import "./uploadpost.css";

// import { useNavigate } from 'react-router-dom';

const Createpost = () => {
  const[user,setUser]=useState({
    author:'',location:'',description:'',
  });

  const handleUpload= async (e)=>{
    //base64Path is the converted string of our file
    const[author,location,description]=user;
    const base64Path= await fileToBase64(e.target.files[0])//calling fileToBase64 fn with our file and we r waiting for this fn to execute first
    axios.post("http://localhost:8080/createpost",{image:base64Path,
    author,
    location,
    description
  });
      console.log(base64Path)
  }

  const fileToBase64=(file)=>{//converting our file to base64 and passing file as param
    return new Promise((resolve,reject)=>{
      const reader=new FileReader();//it is file reading method like fs
      reader.readAsDataURL(file);//it will read our file as url
      reader.onload=()=>{//after onload we will get result
          resolve(reader.result)
      }
      reader.onerror=(err)=>{
        reject(err)
      }
    })
}

  // const handleUpload=(e)=>{
  //   // const image= fileToBase64(e.target.files[0]);
    
  //   axios.post("http://localhost:8080/createpost",{
      
  //   });
  //   console.log({user})
  // }

  
//fn to conver file into base64 strring
  
  let name,value
  const handleOnchange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value})
  }

  


  

  return (
    <div className='upload_container'>
      <form method="POST"  > 
          <div id='upload_container'>
                <div className="upload_file_container">
                    <input className='file_input' type='file' id="image" name="image" onChange={(e)=>{handleUpload(e)}} /> 
                </div>

                <div className="upload_information_container">
                  <input className='file_input' type="text" autoComplete="off" name="author"  value={user.author} 
                  onChange={handleOnchange}
                  placeholder="Author"
                  id="author" />
                  <input className='file_input' type="text" autoComplete="off" name="location"  value={user.location}
                  placeholder="Location"
                  onChange={handleOnchange}
                  id="location" />
                </div>

                <div className="description_conatiner">
                  <input className='file_input' type="text" autoComplete="off" name="description"  value={user.description}
                  placeholder="Description"
                  onChange={handleOnchange}
                  id="description" />
                </div>
                <div className="btn_container">
                    <button className='upload_btn' type="submit" onClick={handleUpload}>Post</button>
                </div>
        </div>
      </form>
    </div>
  )
}

export default Createpost;
