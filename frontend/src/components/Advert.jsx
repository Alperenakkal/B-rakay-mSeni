import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Maps from './Maps';
const Advert =({advert,admin,onclick})=>{
    const performClick =(evt)=>{
        onclick(evt,advert.id);
    };
 

return(
<div className="list-group-item">
    <div className="card-item">
        <div className="card-top">
       
        <h4>
        <FontAwesomeIcon  icon={faUser} />
         <NavLink  to={`/advert/${advert.id}`}>  {advert.name}</NavLink>

        </h4>
        <div className="address-container">
            <div className="start-point">
            <FontAwesomeIcon icon={faMapPin} />        
             <p className='card-address'>Başlangıç Noktası: {advert.startLocation}</p>
            </div>
            <div className="ok">
            ↧
            </div>
        <div className="end-point">
        <FontAwesomeIcon icon={faMapPin} />  
        <p className='card-address'>Varış Noktası: {advert.endLocation}</p>
        </div>
        </div>
        </div>
        
        
        
        <span className="card-badge">{advert.days.open}</span>
        
    </div>
    
    
</div>

)
};

export default Advert;