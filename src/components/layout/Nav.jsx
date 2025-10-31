import React from 'react';
import "./Nav.css";
import logo from '../../Assets/logo.png';
import MainMenuTap from '../common/MainMenuTap';

const Nav = () => {
  return (
    <>
    
   
      <nav className="navbar-container">
                <img src={logo} alt="logo" className="nav-logo" />
                <MainMenuTap title =" About "/>
                <MainMenuTap title ="Investor Relations "/>
                <MainMenuTap title ="Responsible Banking "/>
                <MainMenuTap title ="Newsroom "/>
                <MainMenuTap title ="Learning Center "/>
                <MainMenuTap title ="Careers "/>
                <MainMenuTap title ="Others"/>
               
      </nav>

      
    </>
  );
}

export default Nav;
