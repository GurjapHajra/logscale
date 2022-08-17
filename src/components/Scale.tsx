import React from 'react'
import "./Scale.css"
import type { RootState } from '../store'
import { useSelector } from 'react-redux'
import {powerToPosition} from "../method"

const Scale = () => {

  const arrays = useSelector((state:RootState) => state.data.arrays);
  const data = [...arrays]

  return (
    <div className='scale'>
        <div className="scroll" >
          {//generating center line
            (data.length>0)&&(<div id="center_line" style={{width:powerToPosition(data.sort((a: { value: number },b: { value: number })=>a.value>b.value? 1:-1)[data.length-1].value)+200}}></div>)
            ||(<div id="center_line"></div>)
            
          }
          
          {//generating images
          data.sort((a: { value: number },b: { value: number })=>a.value>b.value? 1:-1).map((obj: { link: string | undefined; value: any },index: number)=>{
            if(index%2===0){
              return <img src={obj.link} className="photo-top" style={{left: powerToPosition(obj.value)- 45}}/>;
            }
            return <img src={obj.link} className="photo-bottom" style={{left: powerToPosition(obj.value) -45}}/>
          })
          }

          {//generating names
            data.sort((a: { value: number },b: { value: number })=>a.value>b.value? 1:-1).map((obj: { value: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined },index: number)=>{
              if(index%2===0){
                return <span className='name-top' style={{left: powerToPosition(obj.value)-45}}>{obj.name}</span>
              }
              return <span className='name-bottom' style={{left: powerToPosition(obj.value)-45}}>{obj.name}</span>
            })
          }

          {//generating marks
            data.sort((a: { value: number },b: { value: number })=>a.value>b.value? 1:-1).map((obj: { value: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined },index: number)=>{
              if(index%2===0){
                return <div className='marker-top' style={{left: powerToPosition(obj.value)}}></div>
              }
              return <div className='marker-bottom' style={{left: powerToPosition(obj.value)}}></div>
            })
          }

          {//generating ticks
            (data.length>0)&&([...Array(Math.ceil((powerToPosition(data.sort((a: { value: number },b: { value: number })=>a.value>b.value? 1:-1)[data.length-1].value)+200)/100))]
            .map((e, i) =>
              <div className="tick" style={{left:(100*i)-1}}></div>
            ))
          }

        </div>
    </div>
  )
}

export default Scale