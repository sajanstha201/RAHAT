import './IndividualPost.css';
function IndividualPost({post}){
    return(
        <div className='individual-post-container'>
            <img src={post.src} className='post-layout'></img>
        </div>
    );
}
export default IndividualPost;