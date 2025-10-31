import React, { Component } from 'react';
import "./NewsCard.css";



const NewsCard = (props) => {

    return ( <>
     {props.img && <img src={props.img} alt="news" className="news-image" />}
  <p className='textnews'> {props.text}</p>
  <p className='textnews2'> {props.text2}</p>

    
    
    </> );
}
 
export default NewsCard;