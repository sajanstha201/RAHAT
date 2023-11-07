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
                <h1>Introducing MAHE's very own mental wellbeing community</h1>
            <img src={rahat_logo} alt="image1" class="image"></img>
            <h3>RAHAT IS OPEN TO ALL DEPTS OF MAHE, BENGALURU!</h3>
            <h3 style={{fontFamily:"RoxboroughCF"}}>STAY TUNED FOR MORE UPDATES!!!</h3>
            <br></br>
            <h3>WHAT IS RAHAT?</h3>
            <p >Rahat is like a friendly hand when things get stressful. It's a place where we can talk about how we feel and learn ways to stay strong during college life and even after it. 
                It is a vibrant, fun-filled haven for socializing, adventure and a variety of enjoyable activities aimed at enhancing campus well-being
            </p>
            </div>
            <div class="right-div">

            </div>
            
        </div>
    );
}
export default Home;