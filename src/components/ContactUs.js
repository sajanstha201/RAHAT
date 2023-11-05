import facbook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import telephone from "../images/telephone.png";
import linkedin from "../images/linkedin.png";
import ngl from "../images/ngl.jpeg";
import discord from "../images/discord.png";
import './ContactUs.css';
function ContactUs(){
    return(
        <div class="ContactUs">
          <h3>Contact Us</h3>
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

          <img src={telephone} class="telephone"></img>
          <span>8073292155</span>
          <p>sajanstha201.55@gmail.com</p>
        </div>
    );
}
export default ContactUs;