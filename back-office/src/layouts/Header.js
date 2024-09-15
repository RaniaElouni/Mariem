import React from 'react'
import { IoOpenOutline } from "react-icons/io5";

export default function Header({setToggle,toggle}) {
  return (
    <div className='position-fixed bg-warning w-100  ' style={{paddingLeft:toggle === true ? 240 : 0,height:70}}>
      {toggle===false && <button  className='btn btn-light' onClick={()=>setToggle(true)}><IoOpenOutline /> </button>}
      

    </div>
  )
}
