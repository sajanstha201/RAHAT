import './NavBar.css';
import rahat_logo from '../images/rahat_logo.jpeg';
import facbook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import telephone from "../images/telephone.png";
import linkedin from "../images/linkedin.png";
import ngl from "../images/ngl.jpeg";
import discord from "../images/discord.png";
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div className="NavBar">
            <img src={rahat_logo} alt="rahat logo" className="logo"></img>
            <ul className="lists">
                <li><Link to="/RAHAT">Home</Link></li>
                <li><Link to="/Team">Team</Link></li> 
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><a href="https://sajanstha201.github.io/2D-Game-With-Vanilla-Javascript/">Games</a></li>
                <li><Link to="/Books">Books</Link></li>
            </ul>
            <div class="socialMedia">
              <a href="https://www.instagram.com/rahat_to_all/?igshid=NzZlODBkYWE4Ng%3D%3D"> 
                 <img src={instagram} class="icons"></img> </a>
            <a href="https://x.com/RahatMAHEBlr?t=TR8M90Unu6cHpFsPxTTf-A&s=08">
            <img src={twitter} class="icons"></img>
              </a>
            <a href="https://www.linkedin.com/company/rahat-the-mental-wellbeing-community/">
              <img src={linkedin} class="icons"></img></a>
              <a href="https://ngl.link/rahat_to_all1">
                <img src={ngl} class="icons"></img></a>
                <a href="https://discord.com/invite/C9AA4EEB">
                <img src={discord} class="icons"></img></a>
          </div>
        </div>
    );
}
export default NavBar;