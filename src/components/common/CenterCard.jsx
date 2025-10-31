import React, { Component } from 'react';
import "./CenterCard.css";

const CenterCard = (props) => {
    return ( <>
    
    <div className='divcenter'>

       <p className="centercard"> {props.centercard}</p>
       
    </div>
     
    
    </> );
}
 
export default CenterCard;