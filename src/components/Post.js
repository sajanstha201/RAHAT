import './Post.css';
import rahat_logo from '../images/rahat_logo.jpeg';
import IndividualPost from './IndividualPost';
import image1 from '../images/Post/changes/1.png';
import image2 from '../images/Post/changes/2.png';
import image3 from '../images/Post/changes/3.png';
function Post(){
    class post{
        constructor(src,height,width){
            this.src=src;
            this.height=height;
            this.width=width;
        }
    }
    let post1=new post(rahat_logo);
    let post2=new post(image1,300,300);
    let post3=new post(image2,300,300);
    let post4=new post(image3,300,300);
    return(
        <div style={{display:'flex'}}>
            <div style={{width:'150px'}}></div>
        <div style={{display:"flex"}}>
        <IndividualPost post={post2}/>
        <IndividualPost post={post3}/>
        <IndividualPost post={post4}/>
        </div>
        <div style={{width:'150px'}}></div>
        </div>
    );
}
export default Post;