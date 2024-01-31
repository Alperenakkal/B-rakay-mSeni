import React from "react";
import Advert from "./Advert";
import { useNavigate } from "react-router-dom";
const AdvertList=({adverts=[],admin,onClick})=>{
    const performClick =(evt,id)=>{
        onClick(evt,id);
    }
    return(
        <div className="list-group">
           
            {adverts.map((advert,index)=>
            <Advert key={index} advert={advert} admin={admin} onclick={performClick}></Advert>
            )}
            
        </div>
    )
}
export default AdvertList;