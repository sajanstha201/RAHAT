import image1 from "../images/HomePage/image1.jpeg"
import image2 from "../images/HomePage/image2.jpeg"
import image3 from "../images/HomePage/image3.jpeg"
import image4 from "../images/HomePage/image4.jpeg"
import image5 from "../images/HomePage/image5.jpeg"
import rahat_logo from "../images/rahat_logo.jpeg"
import './Home.css';
function Home(){
    return(
        <div class="home-page">
            <div class="left-div">

            </div>
            <div class="middle-div">
                <br></br>
            <img src={rahat_logo} alt="image1" class="image"></img>
            <h3>Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.</h3>
            </div>
            <div class="right-div">

            </div>
            
        </div>
    );
}
export default Home;