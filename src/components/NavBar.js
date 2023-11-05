import './NavBar.css';
import rahat_logo from '../images/rahat_logo.jpeg';
import {Link} from 'react-router-dom';
function NavBar(){
    return(
        <div className="NavBar">
            <img src={rahat_logo} alt="rahat logo" className="logo"></img>
            <ul className="lists">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Team">Team</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
            </ul>
            <span className='search'>
                <input className='searchPlace' type='text' placeholder='search'></input>
                <button >search</button>
            </span>
        </div>
    );
}
export default NavBar;