import React, { useRef, useState, useEffect } from 'react'
import Avatar from '../Avatar/Avatar';
import Checkbox from '../Checkbox/Checkbox';


import style from './Input.module.css';


export default function Input() {
  const inp =useRef(null);
    const [data,setData]=useState("india");
    const [val,setVal]=useState();

    const handleChange=()=>{
      inp.current.value?setData(inp.current.value):setData("india")
    }

   useEffect(()=>{
    let url=`https://restcountries.com/v3.1/name/${data}`
    fetch(url)
    .then((res)=>{
        return res.json();
    })
   .then((res)=>{setVal(res)})
   
     },[data]); 
                                      
  return (
   
    <div>
            <input type={"text"} className={style.inp} ref={inp} placeholder={"🔍"} />
             <button onClick={handleChange}>search</button>
     {
             
   val?
          <Checkbox getCountry={val}/>:null
           }
   </div>
  )
}
