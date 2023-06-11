
import React from 'react';
import { Main1 } from '../styles/VIsion.style'; 
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet';
import Navbar from '../components/Navbar';


const Vision = () => {
  return (
    <div >
    <Navbar />
    <Helmet>
       <title>The Vision</title>
    </Helmet>
    <div>
      
	  <Main1  style={{minHeight:"70vh",justifyContent:"center"}} >
      <div class="main1v" style={{marginTop:"7%", marginBottom:"7%", marginLeft:"5%", marginRight:"20%"}}>
        <h1 className="main2txt" style={{fontFamily: "Oswald", fontSize:"500%", textAlign:"left", justifyContent:"center", textTransform:"uppercase"}}>
        WHAT Nobody does
        </h1>
        <h4  style={{fontFamily: "Oswald",  textAlign:"left", justifyContent:"center", textTransform:"uppercase",color:"#FFFFFF",fontSize:"140%",fontWeight:"100"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis eleifend quam. Vel quam elementum pulvinar etiam non quam. Tincidunt arcu non sodales neque sodales ut etiam sit. Senectus et netus et malesuada. Gravida neque convallis a cras semper auctor. Pellentesque eu tincidunt tortor aliquam. At quis risus sed vulputate. Morbi enim nunc faucibus a pellentesque sit. A diam sollicitudin tempor id eu nisl. Ut etiam sit amet nisl purus in mollis nunc. Urna et pharetra pharetra massa massa. Lectus mauris ultrices eros in. Facilisi morbi tempus iaculis urna. Velit scelerisque in dictum non. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Lorem sed risus ultricies tristique nulla aliquet enim tortor.

Ac placerat vestibulum lectus mauris ultrices. In egestas erat imperdiet sed euismod nisi porta. Pellentesque pulvinar pellentesque habitant morbi tristique. Tellus id interdum velit laoreet id donec. Urna neque viverra justo nec ultrices dui sapien. Sed nisi lacus sed viverra tellus in hac habitasse. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Turpis cursus in hac habitasse platea dictumst. Amet porttitor eget dolor morbi non arcu risus quis. Mi eget mauris pharetra et ultrices neque. Quis varius quam quisque id diam vel. Quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Quam elementum pulvinar etiam non quam lacus.</h4>
   
      <a>Read our Whitepaper</a>
      </div>
   
      </Main1>
	</div>
  <Footer /> 
  <div className="imgback" />
  </div>
  );
};
  
export default Vision;