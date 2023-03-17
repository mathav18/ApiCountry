import React,{useState} from 'react'
import Avatar from '../Avatar/Avatar'

export default function Button() {

     const [color,setcolor] = useState(0);

    // const HandleCount=(e)=>{
    //    count(e.target.value);
    // }

    const handleColor=(e)=>{
        setcolor(e.target.value);
    }
  return (
    <div>
 {/* <input onchange={HandleCount} type="text"/> */}
 <input onChange={handleColor} type={"text"}/>
 
   {
    color ? <Avatar bgChanger={color}/> :null
   }
    </div>
  )
}
