import IndividualBook from "../components/IndividualBook";
import image from '../images/rahat_logo.jpeg';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import './Books.css';
import { useState } from "react";
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
    return(
        <>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualBook obj={object}/><IndividualBook obj={object}/>
        </div>
        </>
    );
}
export default Books;