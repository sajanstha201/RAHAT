import './Resources.css'
import Books from '../components/Books';
import Post from '../components/Post';
function Resources(){
    return(
        <div className='resources'>
        <div className='books'>
            <h1>Books</h1>
            <Books/>
        </div>
        <br></br>
        <hr></hr>
        <div style={{textAlign:'center'}}>
            <h1>Post</h1>
            <Post/>
        </div>
        </div>
    );
}
export default Resources;