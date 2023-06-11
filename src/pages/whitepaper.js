import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import { useState,useEffect } from 'react';

const Whitepaper = () => {
    let redirect_Page = () => {
        let iCnt = 0;	// for time in seconds.
        let iTimerId = setInterval(function () {
            iCnt--;     // decrease counter by 1.
            if (iCnt === 0) {
                // now, redirect page.
                window.location.href = 'https://www.encodedna.com/javascript/operators/default.htm';
                clearInterval(iTimerId);		// clear time interval.
            }
        }, 1000);

    }

    
   
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        setTimeout(() => {
          setIsVisible(false);
        }, 2500 )
        }, []);
  
        

return (
	<>
<div className=''>

	<div style={{ display: "flex",height:"90vh",justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Redirecting</title>
      
      </Helmet>

    <td>
    <svg width="200" height="200" viewBox="0 0 40 60">
    <polygon class="triangle" fill="none" stroke="#fff" stroke-width="1" points="16,1 32,32 1,32"/>
    <text class="loading" x="0" y="45" fill="#fff"  style={{textTransform:'uppercase', fontFamily:"Oswald",fontWeight: "900"}}>Redirecting</text>
</svg>
<div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>
   
      <div class="Aligner-item">     
      </div>   </div>
    



     



  </td>
 
  </div>
 

    </div>
    <div className="footera" style={{justifyContent:"center",backgroundColor:"transparent"}}>
    <a className='buttona' hidden={isVisible} href='https://app.gitbook.com/s/6MclKADOaRfEiYNWOBxF/roadmap/brand-roadmap'>Not Working?</a> 
    
    </div>
	</>

);
};

export default Whitepaper;
