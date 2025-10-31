import React, { Component } from 'react';
import "./Home.css"
import Nav from '../components/layout/Nav';
import Header from '../components/layout/Header';
import Btn from './../components/common/Btn';
import SmallMenuTap from '../components/common/SmallMenuTap';
import SectionTitle from '../components/common/SectionTitle';
import SubTitle from '../components/common/SubTitle';
import Card from '../components/common/Card';
import CenterCard from '../components/common/CenterCard';
import left from '../Assets/left.png';
import mid from '../Assets/mid.png';
import right from '../Assets/right.png';
import left2 from '../Assets/left2.png';
import mid2 from '../Assets/mid2.png';
import right2 from '../Assets/right2.png';
import NewsCard from '../components/common/NewsCard';
import img50 from '../Assets/img50.png';
import CIB from '../Assets/CIB.jpg';
import CIB2 from '../Assets/CIB2.png';
import Handshakeimg from '../Assets/handshakimg.png';

import one from '../Assets/1.png';
import two from '../Assets/2.png';
import three from '../Assets/3.png';

import one1 from '../Assets/one1.png';
import PIC2 from '../Assets/PIC2.png';
import PIC3 from '../Assets/PIC3.png';

import web from '../Assets/web.png';
import call from '../Assets/call.png';
import branch from '../Assets/branch.png';
import Footer from '../components/layout/Footer';




const Home = () => {
    return ( 
 <>  
      <Nav />
      <div className='btnn'> 
      <Btn title="Discover More"/> 
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
                <CenterCard centercard ="Buying and making a home"/>
        
                 <div className='buying'>
                   <SmallMenuTap title =" Buying a home can be an emotional process, but it rsquo;s important to approach it logically"/>
                   </div>import Footer from './../components/layout/Footer';


                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>

             <div className='leftcard'>
              <img src={mid2} alt="mid2" />
                <CenterCard centercard ="Traveling on a budget"/>
                <div className='buying'>
                   <SmallMenuTap title =" So for all of you travelers, take a vacation without spending a fortune with  helpful tips and tricks:"/>
                   </div>
                {/* <p className='buying'>So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:</p> */}
                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>

             <div className='leftcard'>
              <img src={right2} alt="right2" />
                <CenterCard centercard ="University life tips"/>
               
                <div className='buying'>
                   <SmallMenuTap title =" The impact of a good education can be transformative. "/>
                   </div>
                <div className='readdiv'>
                <p className='read'>Read more </p>
                </div>
             </div>
    </section>

        <div className='viewmorebtn'>
           <Btn title="View More"/>  
       </div>
           
    

    <div  className='newsbtn'>
            <SectionTitle  sectitle  ="News"/>
         </div>
    <section className='NEWS_SECTION'>
         
        <NewsCard img={img50} />
    <div className='NC'>
        <NewsCard  text="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
                         Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
                         Halan Consumer Finance, Worth EGP 3.4 Billion."/>

        <NewsCard  text2="Commercial International Bank (CIB) Has Partnered
                         with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan
                         ConsumerFinance, Worth EGP 3.4 Billion"/>
   
       <NewsCard  text="CIB, Egypt's leading and largest private sector bank, has successfully partnered
                        with CI Capital to complete the seventh issuance for Halan Consumer Finance,
                        valued at EGP 3.4 billion  "/>
      </div>

    </section>


 <section className='NEWS_SECTION'>
     <NewsCard img={CIB2} />
        <div className='NC'>
              <NewsCard  text="08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 
                         2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"/>

              <NewsCard  text2="Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"/>
      
              <NewsCard  text="CIB, Egypt’s leading and largest private-sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp FinancialServices, worth EGP 2.3 billion.  "/>
       </div>
 </section>  





  <section className='NEWS_SECTION'>
     <NewsCard img={CIB} />
        <div className='NC'>
              <NewsCard  text="21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 
                               4.1 billion in Its First Year of Operations"/>

              <NewsCard  text2="Commercial International Finance Company (CIFC) 
                                Records EGP 4.1 billion in Its First Year of Operations"/>
      
              <NewsCard  text="CIB, Egypt’s leading and largest private-sector bank is pleased to announce 
                               that its subsidiary, CIFC, has delivered remarkable results since its inception in 
                               April 2024..  "/>
       </div>
 </section>  


 <div className='viewmorebtn'>
           <Btn title="View  All News"/>  
       </div>



<section className="promo-section">
      <div className="promo-image">
        <img src={Handshakeimg} alt="Handshake" className="promo-bg" />
        <div className="promo-content">
          <h2 className="promo-title">CIB on an international scale</h2>
          <p className="promo-text">
            Learn more about CIB's presence outside of Egypt
          </p>
          <div className='LEARNBTN'>
           <Btn title="Learn More"/>  
       </div>
        </div>
      </div>
    </section>


      



<section className='CARDSSS_SUS'>
 <div className='SUSMAINMAIN'>
   <div className='both'>
          <SubTitle subtitle ="S  u  s  t  a  i  n  a  b  l  e    f  i  n  a  n  c  e"/>
         <SectionTitle  sectitle  ="Sustainability is an integral part of the way we work"/>
       </div>
  <div className='SUSMAIN'>
     <div className='sus'>
              <img src={one} alt="left2" />
        
                 <div className='txt2'>
                   <SmallMenuTap title =" S&P/EGX ESG Index"/>
                   </div>

         
             </div>

             <div className='sus'>
              <img src={two} alt="mid2" />

                <div className='txt2'>
                   <SmallMenuTap title =" Bloomberg Gender Equality Index "/>
                   </div>
               
             </div>

             <div className='sus'>
              <img src={three} alt="right2" />
               
                <div className='txt2'>
                   <SmallMenuTap title =" FTSE4Good Index "/>
                   </div>

             </div>
         

          

    </div>
 <div className='LEARNBTN'>
           <Btn title="Learn More"/>  
       </div>
</div>
    </section>




<section className='CARDSSS_aw'>
  <div className='SUSMAINMAIN'>
      <div className='both'>
          <SubTitle subtitle ="A w a r d s"/>
         <SectionTitle  sectitle  =" CIB's integrity and quality are recognized internationally"/>
       </div>
  <div className='SUSMAIN'>
     <div className='sus'>
              <img src={one1} alt="left2" />
        
                 <div className='txt2'>
                   <SmallMenuTap title =" Best Private Bank in Egypt"/>
                   <p className='TWO'>Euromoney - 2023</p>
                   </div>

         
             </div>

             <div className='sus'>
              <img src={PIC2} alt="mid2" />

                <div className='txt2'>
                   <SmallMenuTap title ="Best Mergers & Acquisitions Deal in MENA "/>
                   <p className='TWO'>EMEA Finance - 2023 </p>
                   </div>
               
             </div>

             <div className='sus'>
              <img src={PIC3} alt="right2" />
               
                <div className='txt2'>
                   <SmallMenuTap title ="Best Bank in Egypt "/>
                   <p className='TWO'>Euromoney - 2023</p>
                   </div>

             </div>
          </div>
       <div className='LEARNBTN'>
           <Btn title="See all our awards"/>  
       </div>
       </div>
</section>






            <SubTitle subtitle ="W  e  C  a  r  e"/>
            <SectionTitle  sectitle  =" Our dedicated team is committed to meeting your "/>
            <SectionTitle  sectitle  =" Needs "/>


        <section className='BIG'>

        <div className='BIGCARD2'>
              <img src={web} alt="right" />
           <div className='webdiv'>
                <Card card ="Online"/>

           <div className='chat'>
            <p>Chat with 'Zaki' our digital
              assistant to guide you through our 
              products and services, or reach 
              out on social media.</p> 
              </div>     
              
             </div>
        </div> 


        <div className='BIGCARD2'>
              <img src={branch} alt="right" />
           <div className='webdiv'>
                <Card card ="On the phone"/>
              <div className='chat'>
            <p>For support, including 
              emergencies such as cards 
              closure or immediate critical 
              feedback.</p> 
              </div>  
             </div>
        </div>   



        <div className='BIGCARD2'>
              <img src={call} alt="right" />
           <div className='webdiv'>
                <Card card ="In branch"/>
              <div className='chat'>
            <p>help you get the service you need.
              relationship managers are here to 
              help you get the service you need.</p> 
              </div>  
             </div>
        </div> 
 </section>


<section className='FOOTER'>
  
  <div className='txt-footer'>
    <Footer/>
  </div>

          
</section>


    </>
);
}
 
export default Home;