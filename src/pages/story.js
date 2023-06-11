import React from "react";
import "../index.css";
import { Main2 } from "../styles/VIsion.style";
import Footer from "../components/Footer";
import {Helmet} from 'react-helmet';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import Navbar from "../components/Navbar";
const About = () => {
	function option(){
		(".option").removeClass("active");
		(this).addClass("active");
		
	 };
	 
return (



	<div  style={{height:"100%",width:"100%"}}>
     <Navbar />
	 <div style={{height:"1vh"}}></div>
<Helmet>
      <title>Lore</title>
      
      </Helmet>
    <div style={{backgroundColor:"#00000"}}>
	  <Main2 style={{minHeight:"70vh",justifyContent:"center", backgroundColor:"#00000"}} >

	  <div className='backstrpage'>
	<div style={{ display: "flex",height:"85vh",justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
  <Helmet>
      <title>Home</title>
      
      </Helmet>

    <td>
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>
      <div class="Aligner-item">     
      </div>   </div>

  </td>
  </div>
    </div>

       

  


      <section>

	<div  style={{backgroundColor:"black"}}>
	<div className='lorepage' style={{padding:"10%",backgroundColor:"black"}}>
      <div className="abtborder2" style={{paddingTop:"2%", paddingBottom:"2%",paddingLeft:"5%",paddingRight:"5%",opacity:"500%"}}>
		  <div style={{}}>
        <h1 className="leadershiptxt" style={{fontFamily: "Oswald", textAlign:"center", justifyContent:"center", textTransform:"uppercase"}}>
        Our Leadership
        </h1>
        <h4  style={{fontFamily: "Oswald",  textAlign:"center", justifyContent:"center", textTransform:"uppercase",color:"#FFFFFF",fontSize:"140%",fontWeight:"100"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Vel quam elementum pulvinar etiam non quam. Tincidunt arcu non sodales neque sodales ut etiam sit. Senectus et netus et malesuada. Gravida neque convallis a cras semper auctor. Pellentesque eu tincidunt tortor aliquam. At quis risus sed vulputate. Morbi enim nunc faucibus a pellentesque sit. A diam sollicitudin tempor id eu nisl. Ut etiam sit amet nisl purus in mollis nunc. Urna et pharetra pharetra massa massa. Lectus mauris ultrices eros in. Facilisi morbi tempus iaculis urna. Velit scelerisque in dictum non. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Lorem sed risus ultricies tristique nulla aliquet enim tortor.

Ac placerat vestibulum lectus mauris ultrices. In egestas erat imperdiet sed euismod nisi porta. Pellentesque pulvinar pellentesque habitant morbi tristique. Tellus id interdum velit laoreet id donec. Urna neque viverra justo nec ultrices dui sapien. Sed nisi lacus sed viverra tellus in hac habitasse. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Turpis cursus in hac habitasse platea dictumst. Amet porttitor eget dolor morbi non arcu risus quis. Mi eget mauris pharetra et ultrices neque. Quis varius quam quisque id diam vel. Quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quam elementum pulvinar etiam non quam lacus.</h4>
	<div style={{paddingTop:"50px",paddingBottom:"50px"}}>
      <a className="buttona" href="https://twitter.com/" style={{color:"white"}}>Hear our Vision</a>
	</div>
	</div>
      </div>
		</div>
	  </div>
	
	  <div style={{backgroundColor:"#D8B36C",height:"10vh"}}>	</div>
        </section>
      
      </Main2>
      <section style={{paddingLeft:"13%"}} >
      </section>

    <section style={{height:"5vh"}}></section>
  
 
        <Footer />
    
		</div>
		</div>


);
};

export default About;
