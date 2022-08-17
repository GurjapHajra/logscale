import React from 'react'
import "./Storage.css"
import PopUp from "./PopUp"
import { useState } from 'react'

const Storage = () => {

  const [saveTog,setSaveTog] = useState(false);
  const [loadTog,setLoadTog] = useState(false);

  const toggleSave = () =>{
      (saveTog==true) ? setSaveTog(false) : setSaveTog(true);
  }

  const toggleLoad = () =>{
    (loadTog==true) ? setLoadTog(false) : setLoadTog(true);
}

  return (
    <div className='storage'>
      <button onClick={toggleSave}>Save</button>
      <button onClick={toggleLoad}>Load</button>
      
    {saveTog && <PopUp message="save got it" clickHandle={toggleSave} mode="save"/>}
    {loadTog && <PopUp message="load got it" clickHandle={toggleLoad} mode="load"/>}

    </div>
  )
}

export default Storage