import facbook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import telephone from "../images/telephone.png";
import linkedin from "../images/linkedin.png";
import './ContactUs.css';
function ContactUs(){
    return(
        <div class="ContactUs">
          <div class="socialMedia">
            <img src={facbook} class="icons"></img>
              <a href="https://www.instagram.com/rahat_to_all/?igshid=NzZlODBkYWE4Ng%3D%3D"> 
                 <img src={instagram} class="icons"></img> </a>
            <img src={twitter} class="icons"></img>
            <img src={linkedin} class="icons"></img>
          </div>
          <img src={telephone} class="telephone"></img>
          <span>8073292155</span>
          <p>sajanstha201.55@gmail.com</p>
        </div>
    );
}
export default ContactUs;