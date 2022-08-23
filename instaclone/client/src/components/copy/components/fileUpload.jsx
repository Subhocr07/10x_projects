import React from 'react';
import './fileUpload.css'
import { useState } from 'react';
import axios from "axios";
const Fileupload = () => {
  const [csvFile,setCsvFile]=useState();
  const [csvArray,setCsvArray]=useState([]);

  // const handleOnUploadFile=(e)=>{
  //     console.log(e)
  // };
  const handleOnChange=(e)=>{
        setCsvFile(e.target.files[0])
  }

   const processCSV=(str, delim=',')=>{
    const headers=str.slice(0,str.indexOf('\n')).split(delim);
    const rows=str.slice(str.indexOf('\n')+1).split("\n")
    console.log(headers);
    console.log(rows);
    const newArray=rows.map(row=>{
      const values=row.split(delim);
      const eachObject=headers.reduce((obj,header,idx)=>{
                    obj[header]=values[idx];
                    return obj;
      },{})
      return eachObject;
    })

    setCsvArray(newArray);
   }

  const submit=()=>{
    const file=csvFile;
    const reader=new FileReader();

    reader.onload=function(e){
      const text=e.target.result;
      console.log(text)
      processCSV(text);
    }
    reader.readAsText(file);
  }
  console.log(JSON.stringify(csvArray))



  const handleSubmit=()=>{
    axios.get("http://localhost:3001/",{
      
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
  }


  return (
    <>
      <div className='upload_container'>
        <div className='upload_container_file'>
          <div className='upload_file_input'>
                <input type="file" 
                className='file_input_box'
                id='csv_file' name='file'
                 onChange={(e)=>{
                  setCsvFile(e.target.files[0])
                }} 
                 />
                 <br />
                 <button onClick={(e)=>{
                  e.preventDefault()
                  if(csvFile) submit()
                 }}>
                  Submit
                  </button>
                  <br />
                  <br />
                  <button onClick={handleSubmit}>Send</button>
                  {csvArray.length>0 ? null:null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Fileupload;
