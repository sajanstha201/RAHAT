import './NavBar.css';
import rahat_logo from '../images/rahat_logo.jpeg';
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
            <span className='search'>
                <input className='searchPlace' type='text' placeholder='search'></input>
                <button >search</button>
            </span>
        </div>
    );
}
export default NavBar;