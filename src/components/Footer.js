import telephone from "../images/telephone.png";
import './Footer.css';
function Footer(){
    return(
        <div class="Footer">
          <p style={{margin:'0%'}}>Contact Us</p>
          <img src={telephone} class="telephone"></img>
          <span>8073292155</span>
          <p>sajanstha201.55@gmail.com</p>
        </div>
    );
}
export default Footer;