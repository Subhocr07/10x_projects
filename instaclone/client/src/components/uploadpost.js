import axios from 'axios';
import { useState } from 'react';
import "./uploadpost.css";
import { useNavigate } from 'react-router-dom';
/////////////////////////////////////////////////////////////////////////
const Createpost = () => {
  const[user,setUser]=useState({
    author:'',location:'',description:'',
  });
  const[image,setImage]=useState('');

  const navigate=useNavigate();
//selecting the file and seting into state
  const handleImageUpload=  (e)=>{
    //base64Path is the converted string of our file
     fileToBase64(e.target.files[0]).then((base64Path)=>{
      // console.log(base64Path)
      setImage(base64Path)
     });
  }
////function to convert file into base64///////////////////////////////////////
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
///////////it will upload after clicking post btn//////////////////////////
  const handleUpload=(e)=>{
    // const image= fileToBase64(e.target.files[0]);
    // debugger
  const{author,location,description}=user;
    axios.post("https://instaclone-10x-server-1.herokuapp.com/createpost",{
    image,
    author,
    location,
    description
    });
    navigate("/postview")
    // console.log({user})
  }
/////////////it will update our state after evry change on web//////////////////////
  
  let name,value
  const handleOnchange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({...user,[name]:value})
  }

  


  
////////post UI///////////////////////////////////////////////////////////////////
  return (
    <div className='upload_container'>
      <form method="POST"  > 
          <div id='upload_container'>
                <div className="upload_file_container">
                    <input className='file_input' type='file' id="image" name="image" onChange={(e)=>{handleImageUpload(e)}} /> 
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
                    <button className='upload_btn' type="button" onClick={handleUpload}>Post</button>
                </div>
        </div>
      </form>
    </div>
  )
}

export default Createpost;
