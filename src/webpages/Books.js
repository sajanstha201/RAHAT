import IndividualBook from "../components/IndividualBook";
import image from '../images/rahat_logo.jpeg';
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
        <h1 style={{textAlign:'center'}}>Book</h1>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualBook obj={object}/><IndividualBook obj={object}/>
        </div>
        
        </>
    );
}
export default Books;