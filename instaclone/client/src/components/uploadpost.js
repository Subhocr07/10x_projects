import axios from 'axios';
import {useState} from "react";
import "./uploadpost.css";

const Createpost = () => {
  const [userInput,setUserInput]=useState({
    image:"",
    author:"",
    location:"",
    description:""
  });

  const fileTobase64 = (file)=> {
    return new Promise((resolve, reject)=> {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = ()=> {
        resolve(reader.result)
      }
      reader.onerror = (err)=> {
        reject(err);
      }

    })
  }

  const handleUpload = async (e)=> {
    // e.preventDefault();
    const {author,location,description,image}=userInput;
    const base64Path = await fileTobase64(e.target.files[0]);
    console.log(e.target.files[0])
    axios.post("http://localhost:8080/createpost", 
    JSON.stringify(
    { 
      image: base64Path,
      author,
      location,
      description
    }));
    console.log(base64Path);
  }


  const handleOnchange=(e)=>{
      console.log(e);
      const name=e.target.name;
      const value=e.target.value;
      setUserInput({...userInput, [name] : value})

  }

  return (
    <div className='upload_container'>
      <form method="POST" > 
          <div id='upload_container'>
                <div className="upload_file_container">
                    <input className='file_input' type='file' id="image" name="image" onChange={handleOnchange} /> 
                </div>

                <div className="upload_information_container">
                  <input className='file_input' type="text" autoComplete="off" name="author"  value={userInput.author} 
                  onChange={handleOnchange}
                  placeholder="Author"
                  id="author" />
                  <input className='file_input' type="text" autoComplete="off" name="location"  value={userInput.location}
                  placeholder="Location"
                  onChange={handleOnchange}
                  id="location" />
                </div>

                <div className="description_conatiner">
                  <input className='file_input' type="text" autoComplete="off" name="description"  value={userInput.description}
                  placeholder="Description"
                  onChange={handleOnchange}
                  id="description" />
                </div>
          </div>
          <div className="btn_container">
              <button className='upload_btn' type="submit" onClick={handleUpload}>Post</button>
          </div>
      </form>
    </div>
  )
}

export default Createpost;
