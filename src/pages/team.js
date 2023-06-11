import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const Roadmap = () => {
return (
	<div>
        <Navbar />
            <Helmet>
                <title>Team</title>
                </Helmet>
<section style={{backgroundColor:"#000000",verticalAlign:"middle",justifyContent:"center",textAlign:'center',padding:"35vh 0"}}>
                        <div style={{verticalAlign:"middle",}}>
              
                              <h1 className="textvision" style={{top:"50%",left:"50%", textTransform:"uppercase",fontFamily:"PermanentMarker"}}>The VISIONARIES</h1>
                        </div>

		</section>  


	<section style={{paddingLeft:"13%"}}>
	<h1 className="txtteam" style={{fontFamily: "Oswald",  textAlign:"left",justifyContent:"center", textTransform:"uppercase",fontSize:"300%"}}>
       Meet the team
          <br />
       Behind our project
          <br />
      
        </h1>
		</section>
    <div id="team" style={{height: "fit-content",  }}> <div class="container">
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src="https://cdn.discordapp.com/attachments/890670720705777785/1006839791830183987/BEAR.png" alt="Drou" />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>Drou</h4>
                        
                        <h5 style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Project Lead</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card"  style={{justifyContent:"left", textAlign:"left"}}>
                <div class="content"  style={{justifyContent:"left", textAlign:"left"}}>
                    <div class="imgBx">
                        <img src="https://media.discordapp.net/attachments/977260413366435860/981493252014354452/unknown.png" alt="doc"/>
                    </div>
                    <div class="contentBx" style={{justifyContent:"left", textAlign:"left"}}>
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>Vag</h4>
                        <h5 style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Marketing</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src="https://media.discordapp.net/attachments/977260413366435860/981918195495604394/zombi_cigar.jpg?" alt="jack.png" />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald"}}>Zaharon</h4>
                        <h5 style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Managment</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src="https://media.discordapp.net/attachments/977260413366435860/979023484510404698/wolf.jpg" alt="jack" />
                    </div>
                    <div class="contentBx">
                        <h4 style={{fontSize:"175%",  fontFamily:"Oswald"}}>eightOeight</h4>
                        <h5 style={{textTransform:"uppercase", fontFamily:"Oswald"}}>Artist</h5>
                    </div>
                    <div class="sci">

                    </div>
                </div>
            </div>
            </div>
        </div>



		<div class="container">
            <div class="card">
                <div class="content">
                    <div class="imgBx">
                        <img src="https://media.discordapp.net/attachments/890670720705777785/1006539679614652526/Untitled_Artwork_2.jpg" alt="YOU" />
                    </div>
                    <div class="contentBx" style={{justifyContent:"center",textAlign:"center"}}>
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald",justifyContent:"center",textAlign:"center"}}>YOU</h4>
                        
                        <h5 style={{textTransform:"uppercase", fontFamily:"Oswald",justifyContent:"center",textAlign:"center"}}>YOUR PASSION</h5>
                       
                    </div>
                    <a className="buttona" href="https://twitter.com/" style={{color:"white"}}>We are hiring</a>
                    <div class="sci">

                    </div>
                </div>
            </div>
            </div>
            <Footer />
	</div>
      
        
       
    
);
};

export default Roadmap;
