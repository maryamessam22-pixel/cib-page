import React, { Component } from 'react';
import "./Home.css"
import Nav from '../components/layout/Nav';
import Header from '../components/layout/Header';
import Btn from './../components/common/Btn';
import SmallMenuTap from '../components/common/SmallMenuTap';
import SectionTitle from '../components/common/SectionTitle';
import SubTitle from '../components/common/SubTitle';
import Card from '../components/common/Card';
import left from '../Assets/left.png';
import mid from '../Assets/mid.png';
import right from '../Assets/right.png';



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
                
            <SubTitle subtitle ="A p p l y  O n l i n e "/>
            <SectionTitle  sectitle  ="Apply online now for cards and loans with ease!"/>



        <section className='BIG'>

            <div className='BIGCARD'>
              <img src={left} alt="left" className="nav-logo" />
                <Card card ="Apply for a New Account"/>
             </div>

             <div className='BIGCARD'>
              <img src={mid} alt="mid" className="nav-logo" />
                <Card card ="Apply for a card"/>
             </div>

             <div className='BIGCARD'>
              <img src={right} alt="right" className="nav-logo" />
                <Card card ="Apply for a loan or overdaft"/>
             </div>
             </section>

        <SectionTitle  sectitle  ="Learning Center"/>
        <SubTitle subtitle ="Learn more about banking and your finances"/>














    </>
);
}
 
export default Home;