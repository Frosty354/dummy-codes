import React from 'react'
import { useNavigate } from 'react-router-dom'
import {routeprefixes} from '../routes/routePrefixes'
const Homepage = () => {
    const {ckeditor,reactflow,excel}=routeprefixes
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=>navigate(`${ckeditor}`)}>ckeditor</button>
        <button onClick={()=>navigate(`${reactflow}`)}>react flow</button>
        <button onClick={()=>navigate(`${excel}`)}>excel copy</button>
    </div>
  )
}

export default Homepage