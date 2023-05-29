import { useState } from "react"
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const Articles = (props) => {
    const [count,setCount]=useState(0)
    const like=()=>{
        setCount(count+1);

    }
  return (
    <>
    <div  className="articles">
      <img style={{height:'250px' ,width:"350px",marginTop:'4px'}} src={props.img} alt="" />
      <p style={{marginLeft:'8px'}}>{props.text}</p>
     <div className="likes">
          
          <ThumbUpIcon className="thumb" onClick={like}>
          </ThumbUpIcon> 
          {count}
     </div>



    </div>
      
    </>
  )
}

export default Articles
