import React from 'react';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { NavbarSocialLinks } from "../styles/Navbar.style";
import Navbar from '../components/Navbar';
import "../index.scss";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Axios from 'axios';
import { useState } from 'react';
import axios from 'axios'


const Home = () => {



  const lamplortspersolana = 1000000000;
  var totalBGs = 0;
  var rnd = Math.floor(Math.random() * totalBGs) + 0; // 1 - 15
  // 70% of the original volume

  //function MyButton(){

   // const [playSound] = useSound(mySound, { volume: 0.7 }) // 70% of the original volume
   // const handleClick = () => {
    //  playSound()
   // }
   // };



  let nftnumber = Math.floor(Math.random()* 3333);
  let nftnumber2 = Math.floor(Math.random()* 3333);
  let nftnumber3 = Math.floor(Math.random()* 3333);
  let nftnumber4 = Math.floor(Math.random()* 3333);

  const nft0 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber + ".png";
  const nft1 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber2 + ".png";
  const nft2 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber3 + ".png";
  const nft3 = "https://bafybeibpnskvcohqdkayjyu23563oigyo2ax7hqbqn63auzbz4rajbutty.ipfs.nftstorage.link/"+ nftnumber4 + ".png";

  function select() {
    (".l1") ({ backgroundImage: "url(https://static.infamouswolves.com/randomwolf/" + rnd + ".png)" });
  };


  

  const [floorPrice,setfloorPrice,] = useState("")
  const [listings,setlistings,] = useState("")
  const [collectionvolume,setcollectionVolume] = useState("")


//   axios.get("https://api-mainnet.magiceden.io/v2/collections/ekids/stats/", {
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//         "User-Agent": "Mozilla/5.0",
//         'accept': 'application/json, text/plain, */*',
//  'accept-language': 'en-US,en;q=0.9',


//     },
//     }).then((res) => {
//      console.log(res.data);
//     }).catch((err) => {
//      console.log(err.message);
//     });



 let marketcap = 3333*floorPrice; 


if (marketcap == 0) {
  marketcap = "fail"
}

return (

  <div className='backlndpage' style={{}}>
  
  <Helmet>
      <title>Home</title>
      <link rel="icon" href="" type="image/icon type" />
      </Helmet>
      <Navbar />
	<div style={{ display: "flex",height:"70vh" ,justifyContent:"center",verticalAlign:"middle",textAlign:"center",alignItems:"center",verticalAlign:"middle" }}>
    <td>
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>



<section style={{color:"white"}}>


 
<div style={{verticalAlign:"middle"}}>
      {/* <h1 className="indextext" style={{fontFamily:"Oswald", fontWeight:"bolder"}}>InfLabs
      </h1> */}
    <div class="" style={{height:"100%",justifyContent:"center",verticalAlign:"middle"}}>
      <div class="Aligner-item" style={{width:"100%"}}>
      <p  className="pstyle" style={{textTransform:'uppercase', textAlign:"center", fontFamily:"Oswald",fontWeight: "600",padding:"10px"}}><a className='l1'>I</a><a className='l2'>N</a><a className='l3'>F</a><a className='l4' >L</a><a className='l5'>B</a><a className='l6'>S</a></p>  
      <p  className="intromobile" style={{textTransform:'uppercase', textAlign:"center", fontFamily:"Oswald",fontWeight: "900"}}><a className='l1'>I</a><a className='l2'>N</a><a class='l3'>F</a><a className='l4'></a> <br /><a className="web3home"><div id="changeText"></div></a></p>     
      </div>   </div>
    <a href="https://vision.infamouswolves.com" target="_blank" class="button button-arrow bg-magiceden">
    OUR VISION
    </a>
      </div>

</section>
</div>

  </td>

</div>



<section style={{height:"auto",margin:"5%",verticalAlign:"center"}}>

<a href="https://infamouswolves.com"className="grid-flex" >
<div style={{padding:"65px 0px",justifyContent:"space-evenly",textAlign:"center"}}>
        <h1 style={{fontSize:"650%",textTransform:"uppercase",color:"white",textAlign:"center"}}>Infamous Wolves</h1>
        <h1  style={{fontSize:"250%",textTransform:"uppercase",color:"white",textAlign:"center"}}>The Genesis</h1>
      </div>


  </a> 

  </section>







  <section style={{paddingTop:"50px"}}>
  <h1 className="wwab" style={{fontFamily:"Oswald",}}>Our Services</h1>


  <div  style={{height: "fit-content",  }}> <div class="container">
         
            <a class="card" target="_blank"href="https://flip.infamouswolves.com/" style={{backgroundImage: "url(https://media.discordapp.net/attachments/890670720705777785/1084419960484397177/Untitled_Artwork.png)"}}>
            
                <div class="content">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald", color:"white"}}>COINFLIP</h4>
                    <div class="sci">
                    </div>
                </div>
       
            </a>
        
       
            <a href="https://stake.infamouswolves.com/" class="card" target="_blank"style={{backgroundImage: "url(https://media.discordapp.net/attachments/890670720705777785/1033801567649927308/Untitled_Artwork.png?width=1198&height=658)"}}>
         
                <div class="content">
                        <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald", color:"white"}}>STAKING</h4>
                    <div class="sci">
                    </div>
                </div>
     
            </a>

            <a href="https://discord.gg/KjZ9xKyNT6" class="card" target="_blank"style={{backgroundImage: "url(https://media.discordapp.net/attachments/890670720705777785/1095238368473907221/C0F68985-ED75-4350-8F76-8C16614014F4.png)"}}>
         
         <div class="content">
                 <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald", color:"white"}}>MINT TOOLS</h4>
             <div class="sci">
             </div>
         </div>

     </a>

     <a href="https://discord.gg/KjZ9xKyNT6" class="card" target="_blank" style={{backgroundImage: "url(https://media.discordapp.net/attachments/890670720705777785/1028633293349998643/Untitled_Artwork.png"}}>
         
         <div class="content">
                 <h4 style={{fontSize:"175%", textTransform:"uppercase", fontFamily:"Oswald", color:"white"}}>BUILD YOUR OWN</h4>
             <div class="sci">
             </div>
         </div>

     </a>
   


  </div>
  </div>



  </section>


                 


          <a href="https://discord.gg/KjZ9xKyNT6" target="_blank" class="button button-arrow bg-stuck2" style={{opacity:"100%"}}>
      MORE&nbsp;
      <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"  class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>            
    </a>





  <section className="fuckupsection" style={{borderRadius:"50px",height:"auto"}}>
  <h1 className="prob" style={{padding:"0",margin:"3% 6%"}}>"We'll probably fail a lot but failure's not the focus - it's our ability to innovate and solve problems with bold, out-of-the-box solutions that sets us apart"</h1>

  <a href='https://twitter.com/oursolsavior'><h1 className="prob3" style={{padding:"0",margin:"0%",textTransform:"uppercase"}}><img className="sign"src='https://media.discordapp.net/attachments/890670720705777785/1095259705959514173/375D25B4-8C5D-4363-B917-23AF9A5838F5.png?width=658&height=658'></img></h1></a>
  </section>

      <div className='footermobileindex'>
    
      </div>
      <Footer/>
      </div>
    


);
};

export default Home;