import React, { useEffect, useRef, useState } from 'react'
import Country from '../Country/Country'
import  style from './Checkbox.module.css'

export default function Checkbox(props) {

    let getData=props.getCountry;
    const [handleChangeState,sethandleChangeState]=useState(false);
    const [check,setCheck]=useState();
    const [val,setVal]=useState();
    const [res,setRes]=useState({
        cap:"true",
        pop:"true",
        area:"true",
        cont:"true"
    });

  
    
    const check1=useRef(true)
    const check2=useRef(true)
    const check3=useRef(true)
    const check4=useRef(true)
    
 

   const handleChange=(()=>{
    if(handleChangeState==false)
    {
        sethandleChangeState(true)
    }
    else
    {
        sethandleChangeState(false)
    }
   })
   useEffect(()=>{
   
       res.cap=check1.current.checked;
       res.pop=check2.current.checked;
       res.area=check3.current.checked;
       res.cont=check4.current.checked;
        
       setVal([getData,res])
      },[handleChangeState,props.getCountry]);


  
   
  return (
    <div>
        <input  onClick={handleChange} className={style.check} type={"Checkbox"} ref={check1} defaultChecked={true} />
        <label>Capital</label>
        <input  onClick={handleChange} className={style.check} type={"Checkbox"} ref={check2} defaultChecked={true}/>
        <label>population</label>
        <input onClick={handleChange} className={style.check} type={"Checkbox"} ref={check3} defaultChecked={true}/>
        <label>Area</label>
        <input onClick={handleChange} className={style.check} type={"Checkbox"} ref={check4} defaultChecked={true}/>
        <label>continents</label>
       
        {
          val?<Country getcountryData={val}/>:null
        }
           </div>
       )
}
