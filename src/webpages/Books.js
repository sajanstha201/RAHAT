import IndividualBook from "../components/IndividualBook";
import image from '../images/rahat_logo.jpeg';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';
import './Books.css';
import { useState } from "react";
import book1_img from "../images/Books/book1_img.jpeg";
import book2_img from "../images/Books/book2_img.jpeg";
import book3_img from "../images/Books/book3_img.jpeg";
import book4_img from "../images/Books/book4_img.jpeg";
import book5_img from "../images/Books/book5_img.jpeg";
import book6_img from "../images/Books/book6_img.jpeg";
import book7_img from "../images/Books/book7_img.jpeg";
import book8_img from "../images/Books/book8_img.jpeg";

function Books(){
    class Book{
        constructor(name,image,url){
            this.name=name;
            this.image=image;
            this.url=url;
        }
    }
    let book1=new Book("Best for anxiety: Hope and Help for Your Nerves: End Anxiety Now",book1_img,"https://www.amazon.in/Hope-Help-Your-Nerves-Anxiety/dp/0451167228");
    let book2=new Book("Best for recovery from addiction: The Unexpected Joy of Being Sober",book2_img,"https://www.amazon.com/Unexpected-Joy-Being-Sober-alcohol-free/dp/1912023385#:~:text=Much%20more%20than%20a%20tale,you%20will%20love%20this%20book.");
    let book3 =new Book("Best for women survivors of relationship abuse: Healing the Trauma of Abuse: A Women’s Workbook",book3_img,"https://www.amazon.in/Healing-Trauma-Abuse-Ellen-Copeland/dp/1572241993");
    let book4=new Book("Best for understanding a therapist’s perspective: Maybe You Should Talk to Someone",book4_img,"https://www.goodreads.com/book/show/37570546-maybe-you-should-talk-to-someone");
    let book5=new Book("Best for battling burnout: Burnout: The Secret to Unlocking the Stress Cycle",book5_img,"https://www.amazon.in/Burnout-Secret-Unlocking-Stress-Cycle/dp/198481706X");
    let book6=new Book("Best for healing from emotional pain: Emotional First Aid",book6_img,"https://www.amazon.in/Emotional-First-Aid-Guy-Winch/dp/0142181072");
    let book7=new Book("Best for navigating relationships: Attached: The New Science of Adult Attachment and How It Can Help You Find—and Keep—Love",book7_img,"https://www.amazon.in/Attached-Science-Attachment-Find-Keep/dp/1585429139");
    let book8=new Book("Best for understanding family trauma: It Didn’t Start with You: How Inherited Family Trauma Shapes Who We Are and How to End the Cycle",book8_img,"https://www.amazon.in/Didnt-Start-You-Inherited-Family/dp/1101980362");
    return(
        <>
        <div style={{display:'inline-block',textAlign:'center',width:'100%',display:'flex'}}>
            <div style={{width:'25px'}}>

            </div>
            <div>
            <IndividualBook obj={book1}/><IndividualBook obj={book2}/>
            <IndividualBook obj={book3}/><IndividualBook obj={book4}/>
            <IndividualBook obj={book5}/><IndividualBook obj={book6}/>
            <IndividualBook obj={book7}/><IndividualBook obj={book8}/>
            </div>
            <div style={{width:'25px'}}>

            </div>
        </div>
        </>
    );
}
export default Books;