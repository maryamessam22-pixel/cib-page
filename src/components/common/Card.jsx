import React, { Component } from 'react';
import "./Card.css";

const Card = (props) => {
    return ( <>
    
    <div className='divclass'>

       <p className="card"> {props.card}</p>
    </div>
     
    
    </> );
}
 
export default Card;