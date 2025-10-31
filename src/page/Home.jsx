import React, { Component } from 'react';
import "./Home.css"
import Nav from '../components/layout/Nav';
import Header from '../components/layout/Header';
import Btn from './../components/common/Btn';
import SmallMenuTap from '../components/common/SmallMenuTap';
import SectionTitle from '../components/common/SectionTitle';
import SubTitle from '../components/common/SubTitle';



const Home = () => {
    return ( 
 <>  
      <Nav />
      <div className='btnn'> 
      <Btn /> 
     </div>
      <Header />

             <div className='small'>
                <SmallMenuTap title =" Apply online "/>
                <SmallMenuTap title ="News  "/>
                <SmallMenuTap title ="Blog Article"/>
                <SmallMenuTap title ="Cib International "/>
                <SmallMenuTap title ="Sstainable Finance "/>
                <SmallMenuTap title ="Awards"/>
             </div>
                
            <SectionTitle sectitle ="A p p l y  O n l i n e"/>
            <SubTitle subtitle =" Apply online now for cards and loans with ease!"/>
    </>
);
}
 
export default Home;