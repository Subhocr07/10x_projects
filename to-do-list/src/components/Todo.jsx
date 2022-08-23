import React from 'react'
import "./Todo.css";
import { useState,useEffect } from 'react';

const getItem=()=>{
    let list=localStorage.getItem("todoList")
    if(list){
        return JSON.parse(list)
    }else{
        return [];
    }
}

const Todo = () => {
    const [task,setTask]=useState("");
    const[display,setDisplay]=useState(getItem())
    const [toggleAdd,setToggleAdd]=useState(true);
    const [isEdit,setIsEdit]=useState(null);
    const handleOnChange=(e)=>{
        setTask(e.target.value)
        console.log(e.target.value)
    }
    const handleOnSubmit=(e)=>{
       if(!task){
            console.log("please enter anything")
       }else if(task && !toggleAdd){
            setDisplay(
                display.map((item)=>{
                    if(item.id===isEdit){
                        return{ ...item,name:task}
                    }
                    return item;
                })
            )
                    setToggleAdd(true);
                    setTask("");
                    setIsEdit(null)
       }else{
        const allInputData={id:new Date().getTime().toString(),name:task}
        setDisplay([...display,allInputData])
        setTask("")
       }
      
    }
    const editItem=(id)=>{
        const newEditedItem=display.find((item)=>{
            return item.id===id;

        });
        setToggleAdd(false);
        setTask(newEditedItem.name);
        setIsEdit(id)
        console.log(newEditedItem)
    }

    const removeTask=(index)=>{
        const finalData=display.filter((item)=>{
            return index!==item.id
        })
        setDisplay(finalData);
    }
    // const RemoveAll=()=>{
    //     setDisplay('')
    // }

    useEffect(()=>{
        localStorage.setItem("todoList",JSON.stringify(display))
    },[display])

  return (
    <>
      <div className='container'>
            <header>
                <span>ToDo-List </span>
                <span>by Subho</span>

            </header>
            
        <div className='container_box'>
            <input type="text"
             className='input_text'
              id='input_text' 
              placeholder='Add your task'
              value={task}
              onChange={handleOnChange} />
              {
                toggleAdd ?  <button 
                className='submit_btn'
                onClick={handleOnSubmit}
                >Add</button> : <button onClick={handleOnSubmit}
                >Edit</button>
              }
        </div>
        <div className='showItem_box'>
                
                    {
                        display.map((item)=>{
                            return(
                                <div className='display_item' key={item.id}>
                                    <div className='eachItem' >
                                            <span><li >{item.name}</li></span>
                                            <span><button onClick={()=>editItem(item.id)}
                                            >Edit</button></span>
                                            <span><button 
                                            onClick={()=>removeTask(item.id)}>Delete</button></span>
                                    </div>
                                    
                                </div>
                                
                            )
                        })
                    }
                    <div>
                    {/* <button 
                        onClick={(e)=>RemoveAll(e)}>RemoveAll
                        </button> */}
                    </div>
        </div>
      </div>
    </>
  )
}

export default Todo
