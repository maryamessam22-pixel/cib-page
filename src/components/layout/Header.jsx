import React, { Component } from 'react';
// import Header from '../components/layout/Header';
import hero from '../../Assets/hero.png';
import "./Header.css";

const Header = () => {
    return (
<>

   <div className='txt'>
      <h1 className='txth1'>CIB</h1>
             <h2>Delivering value to our clients, our<br></br>
                 community and our shareholders</h2>
   </div>

       <img src={hero} alt="hero" className="hero" />


  
</>
        
      );
}
 
export default Header;