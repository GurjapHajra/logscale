import React from 'react'
import "./UserIn.css"
import {AiOutlinePlus,AiOutlineDelete} from "react-icons/ai"
import {useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { change } from "../dataSlice"


const UserIn = () => {

  const arrays = useSelector((state:RootState) => state.data.arrays);
  const data = [...arrays]

  const dispatch = useDispatch();

  const handleSubmit = (event: any) =>{
    event.preventDefault();
  }

  const addFormFields = () => {
    dispatch(change([...data, { name: "new", value: 0, link:"" }]))
  }

  const handleChange = (i:any,e:any) =>{
    let newdata = JSON.parse(JSON.stringify(data));
    console.log(newdata[i])
    newdata[i][e.target.name] = e.target.value;
    dispatch(change(newdata))
  }

  let removeFormFields = (i:any) => {
    let newFormValues = [...data];
    newFormValues.splice(i, 1);
    dispatch(change(newFormValues))
}

  return (
    <div className='UserIn'>
        <h2>Create Your Own List:</h2>

        <div className="inputdiv">
          
          <form onSubmit={handleSubmit}>
          <h2>Name</h2>
          <h2>Value</h2>
          <h2>Image</h2>
          {
            data.map((element, index) =>(
              <div className='form-inline' key={index}>
                <input type={"text"} name="name" value={element.name} onChange={e => handleChange(index,e)}></input>
                <input type={"number"} name="value" value={element.value} onChange={e => handleChange(index,e)}></input>
                <input type={"url"} name="link" value={element.link} onChange={e => handleChange(index,e)}></input>
                {
                  <button onClick={()=>removeFormFields(index)}><AiOutlineDelete/></button>
                }
              </div>
            ))
          }

          </form>

        </div>

        <div className='cell_change'>
          <button onClick={addFormFields}><AiOutlinePlus/></button>
        </div>
    </div>
  )
}

export default UserIn