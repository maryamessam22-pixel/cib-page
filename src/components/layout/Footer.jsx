import React from 'react';
import "./Footer.css";
import logo from '../../Assets/logo.png';
import FooterLink from '../common/FooterLink';
import google from '../../Assets/google.png';
import app from '../../Assets/app.png';
import imgfooter from '../../Assets/imgfooter.png';
import icon1 from '../../Assets/Icon1.png';
import icon2 from '../../Assets/Icon2.png';
import icon3 from '../../Assets/Icon3.png';
import icon4 from '../../Assets/Icon4.png';
import icon5 from '../../Assets/Icon5.png';
import icon6 from '../../Assets/Icon6.png';

const Footer= () => {
  return (
    <>
    
   <img  className='imgfooter' src={imgfooter} alt="logo" />
<section className='BIGSEC'>

  
  <div className="Footer-container">


<div className='foimg'>
     <img  className='foo' src={logo} alt="logo" />
              <div className='fo'>
                <FooterLink footer =" FAQs"/>
                 <FooterLink footer =" Learning Center "/>
                  <FooterLink footer =" Fees & Charges"/>
                   <FooterLink footer =" Terms & Conditions"/>
             </div>  
         
            <div className='fo'>
               <FooterLink footer ="Local"/>
                 <FooterLink footer =" Aborad "/>
                  <FooterLink footer =" Business"/>
                   <FooterLink footer =" Corporate"/>

             </div>

       <div className='fo'>
               <FooterLink footer ="Careers"/>
                 <FooterLink footer =" Why Cib"/>
                  <FooterLink footer =" Email Us"/>
                   <FooterLink footer =" System Status"/>

             </div>



      <div className='twoimgs'>
               <img  src={google} alt="google" />
               <img   src={app} alt="app" />
      </div>
    </div>

</div>




<div className='BIGLAST'>
<div className='LAST'>
   <section className='secfooter'>
      <div className='CBE'>
        <FooterLink footer ="CBE Approvals"/>
        <FooterLink footer ="Cookie Policy"/>
        <FooterLink footer ="Privacy Policy"/>
        <FooterLink footer ="User Agreements"/>
      </div>
</section>

 <section className='secfooter'>
      <div className='CBE'>
        <img   src={icon1} alt="icon" />
        <img   src={icon2} alt="icon" />
        <img   src={icon3} alt="icon" />
        <img   src={icon4} alt="icon" />
        <img   src={icon5} alt="icon" />
        <img   src={icon6} alt="icon" />
      </div>
</section>
</div>

<div className='last'>
          <p>Copyright © 2025 Commercial International Bank</p>
    </div>

</div>


 </section>









   
    </>
  );
}

export default Footer;