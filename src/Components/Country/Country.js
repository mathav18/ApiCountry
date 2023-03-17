import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

import style from './Country.module.css'


export default function Country(props) {
//  console.log(props)

  
 
  
   
  
  return (
    
    <div className={style.big}>{
       props.getcountryData[0].map((e)=>{
            return (
      <div className={style.box}>
            <div className={style.flagDiv}>
                <img src={e.flags.png}></img>
            </div>
            <h3>{e.name.common}</h3>
            <ul className={style.navigate}>
               {
                  props.getcountryData[1]?props.getcountryData[1].cap?
                  <li>Capital : {e.capital}</li>:null:null
               }

               {
                 props.getcountryData[1]?props.getcountryData[1].pop?
                 <li>population : {e.population}</li>:null:null
                }
                
               
                {
                  props.getcountryData[1]?props.getcountryData[1].area?
                         <li>Area : {e.area}</li>:null:null
                }

                {
                  props.getcountryData[1]?props.getcountryData[1].cont?
                  <li>continents : {e.continents}</li>:null:null
                 
                }
               
                
            </ul>
            </div>
            )
        })
       }
      
       </div>
  )    
}
