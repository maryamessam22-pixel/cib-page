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
import left2 from '../Assets/left2.png';
import mid2 from '../Assets/mid2.png';
import right2 from '../Assets/right2.png';


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
              <img src={left} alt="left"/>
                <Card card ="Apply for a New Account"/>
             </div>

             <div className='BIGCARD'>
              <img src={mid} alt="mid"/>
                <Card card ="Apply for a card"/>
             </div>

             <div className='BIGCARD'>
              <img src={right} alt="right" />
                <Card card ="Apply for a loan or overdaft"/>
             </div>
             </section>

        <SectionTitle  sectitle  ="Learning Center"/>
        <SubTitle subtitle ="Learn more about banking and your finances"/>


    <section className='CARDSSS'>
         <div className='leftcard'>
              <img src={left2} alt="left2" />
                <Card card ="Buying and making a home"/>
                <p className='buying'>Buying a home can be an emotional process, but it rsquo;s important to approach it logically </p>
                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>

             <div className='leftcard'>
              <img src={mid2} alt="mid2" />
                <Card card ="Traveling on a budget"/>
                <p className='buying'>So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:</p>
                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>

             <div className='leftcard'>
              <img src={right2} alt="right2" />
                <Card card ="University life tips"/>
                <p className='buying'>The impact of a good education can be transformative. </p>
                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>
    </section>











    </>
);
}
 
export default Home;