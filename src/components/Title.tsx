import React, { useState } from 'react'
import "./Title.css"
import {useDispatch } from 'react-redux'
import {change_title} from "../dataSlice"
import type { RootState } from '../store'
import { useSelector } from 'react-redux'

const Title = () => {

  const dispatch = useDispatch();
  const savedtitle = useSelector((state:RootState) => state.data.title);

  return (
    <div className='Title'>
      <input placeholder='Title' value={savedtitle} onChange={e => dispatch(change_title(e.target.value))}/>
    </div>
  )
}

export default Title