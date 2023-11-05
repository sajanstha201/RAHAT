import IndividualBook from "../components/IndividualBook";
import image from '../images/rahat_logo.jpeg';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import './Books.css';
function Books(){
    class Books{
        constructor(name,image,url,rating){
            this.name=name;
            this.image=image;
            this.url=url;
            this.rating=rating;
        }
    }
    let object=new Books("Rahat",image," ",6);
    function leftArrowClick(){
        console.log("left");
    }
    return(
        <>
        <h1 style={{textAlign:'center'}}>Book</h1>
        <div class="books">
        <div>
        <button onClick={leftArrowClick()} class="arrow"><img src={leftArrow} alt="left arrow" class="arrow" ></img></button>
        </div>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualBook obj={object}/><IndividualBook obj={object}/>
        </div>
        <div >
            <img src={rightArrow} alt="left arrow" class="arrow"></img>
        </div>
        </div>
 
        
        </>
    );
}
export default Books;