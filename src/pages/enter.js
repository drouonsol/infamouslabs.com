import React from 'react';
import Navbar from "../components/Navbar";
import Helmet from 'react-helmet';
import {
  NavbarContainer,
  RightContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink2,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  NavbarSocialLinks,
  NavbarExtFooter,
  NavLinkContainer
} from "../styles/Navbar.style";

const Enter = () => {
  function whitepaper() {

    setTimeout(function(){
    
      window.location.href = '/home';
    }, 500); }
return (
    <>
      <Helmet><title>Welcome</title></Helmet>
  <NavbarLink2 onClick={whitepaper} to="/redirect">
	<section style={{color:"#", height:"100vh",justifyContent:"center",textAlign:"center",top:"50",bottom:"50",alignItems:"center",display:"flex",verticalAlign:"middle", fontWeight:"300" }}>

	<h1 className='entertxt' style={{color:"black",justifyContent:"center",textAlign:"center",top:"50",bottom:"50",display:"flex",alignItems:"center", fontSize:"500%",verticalAlign:"middle", fontFamily:"Oswald",fontWeight:"300"}} >CLICK TO ENTER</h1>
  
	<h1></h1>
   

	</section>
  </NavbarLink2>
    </>
);
};

export default Enter;
