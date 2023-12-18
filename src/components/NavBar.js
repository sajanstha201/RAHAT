import './NavBar.css';
import rahat_logo from '../images/rahat_logo.jpeg';
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import ngl from "../images/ngl.jpeg";
import discord from "../images/discord.png";
import {Link} from 'react-router-dom';
import { useState } from 'react';
function NavBar(){
  const [isMouseOver,setStyle]=useState(false);
  const style_rahat_logo={width:isMouseOver?'77px':'75px',height:isMouseOver?'77px':'75px'}
    return(
        <div className="NavBar">
          <div style={{width:'10px'}}>
          <Link to="">
            <img src={rahat_logo} alt="rahat logo" onMouseOver={()=>setStyle(true)} onMouseLeave={()=>setStyle(false)}
             style={style_rahat_logo} className="logo">
            </img>
            </Link>
          </div >
            <ul className="lists">
                <li><Link to="/Team">Team</Link></li> 
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/Resources">Resources</Link></li>
            </ul>
            <div class="socialMedia">
              <a href="https://www.instagram.com/rahat_to_all/?igshid=NzZlODBkYWE4Ng%3D%3D"> 
                 <img src={instagram} alt="instagram" class="icons"></img> </a>
            <a href="https://x.com/RahatMAHEBlr?t=TR8M90Unu6cHpFsPxTTf-A&s=08">
            <img src={twitter} alt="twitter" class="icons"></img>
              </a>
            <a href="https://www.linkedin.com/company/rahat-the-mental-wellbeing-community/">
              <img src={linkedin} alt="linkedin" class="icons"></img></a>
              <a href="https://ngl.link/rahat_to_all1">
                <img src={ngl} alt="ngl" class="icons"></img></a>
                <a href="https://discord.com/invite/C9AA4EEB">
                <img src={discord} alt="discord" class="icons"></img></a>
          </div>
        </div>
    );
}
export default NavBar;