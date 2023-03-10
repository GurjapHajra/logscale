import React, { useState } from 'react'
import "./PopUp.css"
import {useDispatch } from 'react-redux'
import { change, change_title} from "../dataSlice"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { arraysToObject, objectToArray } from '../method'
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import axios from 'axios'

//id for testing: 62fc552bb93fc266ad33591e

const PopUp = (props: any) => {

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const arrays = useSelector((state:RootState) => state.data.arrays);
  const savedtitle = useSelector((state:RootState) => state.data.title);

  const[id,setid] = useState("");
  const [savedID, setSavedID] = useState("");
  const [posted,setposted] = useState(false);
  const[isloading,setloading] = useState(false);
  const[iserror,seterror] = useState(false);
  
  //load to a server

  async function fetcharays(){
    const res = await fetch(`https://personal-api-cjzx.onrender.com/LogScale/${id}`);
    return res.json();
  }
  const {data, status} = useQuery(["characters",id],fetcharays,{
    enabled: props.mode === "load"
  })
  if (status === "loading"){
    if(isloading == false)
      setloading(true);
    if(iserror == true)
      seterror(false);
  }
  if(status === 'error'){
    if(isloading == true)
      setloading(false);
    if(iserror == false)
      seterror(true);
    console.error(data);
  }
  if(status === 'success'){
    if(isloading == true)
      setloading(false);
    if(iserror == true)
      seterror(false);
    console.log(data[0])

    arraysToObject(data[0]["names"],data[0]["values"],data[0]["links"])

    dispatch(change(arraysToObject(data[0]["names"],data[0]["values"],data[0]["links"])))
    dispatch(change_title(data[0]["title"]))
    props.clickHandle();
  }

  if(props.mode === "load"){

    const handleLoad = () => {
    }

    return (
      <div className="modal">
        <span className="close" onClick={props.clickHandle}>&times;</span>
        <div className="modal_content">
          <p>ID:</p>
          <input value={id} onChange={e => setid(e.target.value)}/>
          {isloading && <span>loading...</span>}
          {iserror && <span>Not Found</span>}
      </div>
     </div>
    )
  }

  //add to the server

  if(props.mode === "save"){

    const data = [...arrays]

    const send = objectToArray(data)

    if(!posted){
      axios.post("https://personal-api-cjzx.onrender.com/LogScale",{
        "title": savedtitle,
        "names": send[0],
        "values": send[1],
        "links": send[2]
      })
      .then((response) => setSavedID(response.data._id))
      .catch((error)=> setSavedID(error));
      setposted(true);
    }

    return (
      <div className="modal">
        <span className="close" onClick={props.clickHandle}>&times;</span>
        <div className="modal_content">
          <p>ID:{savedID}</p>
      </div>
     </div>
    )
  }
  
  return (
    <div className="modal">
      <span className="close" onClick={props.clickHandle}>&times;</span>
      <div className="modal_content">
        <p>ERROR BROTHER</p>
    </div>
    </div>
  )
  
}

export default PopUp