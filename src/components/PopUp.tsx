import React, { useState } from 'react'
import "./PopUp.css"
import {useDispatch } from 'react-redux'
import { change, change_title} from "../dataSlice"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { arraysToObject, objectToArray } from '../method'
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import axios from 'axios'

//id for testing: 62e2fc91b750ecb5e80a1418

const PopUp = (props: any) => {

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const arrays = useSelector((state:RootState) => state.data.arrays);
  const savedtitle = useSelector((state:RootState) => state.data.title);

  const[id,setid] = useState("");
  const [savedID, setSavedID] = useState("");
  const [posted,setposted] = useState(false);
  const[isloading,setloading] = useState(false);
  
  //load to a server

  async function fetcharays(){
    const res = await fetch(`https://log-scale-api.herokuapp.com/LogScale/${id}`);
    return res.json();
  }
  const {data, status, refetch} = useQuery(["characters",id],fetcharays,{
    enabled: props.mode === "load"
  })

  if(props.mode === "load"){

    const handleLoad = () => {
      refetch();
      if (status === "loading"){
        setloading(true);
      }
      if(status === 'error'){
        setloading(false);
        console.error(data);
      }
      if(status === 'success'){
        setloading(false);
        console.log(data[0])
  
        arraysToObject(data[0]["names"],data[0]["values"],data[0]["links"])
  
        dispatch(change(arraysToObject(data[0]["names"],data[0]["values"],data[0]["links"])))
        dispatch(change_title(data[0]["title"]))
        props.clickHandle();
      }
    }

    return (
      <div className="modal">
        <span className="close" onClick={props.clickHandle}>&times;</span>
        <div className="modal_content">
          <p>ID:</p>
          <input value={id} onChange={e => setid(e.target.value)}/>
          <button onClick={handleLoad}>Load</button>
          {isloading && <span>loading...</span>}
      </div>
     </div>
    )
  }

  //add to the server

  if(props.mode === "save"){

    const data = [...arrays]

    const send = objectToArray(data)

    if(!posted){
      axios.post("https://log-scale-api.herokuapp.com/LogScale",{
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