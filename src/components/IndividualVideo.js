import './IndividualVideo.css'
function IndividualVideo(video){
    return(
        <div className='video'>
            <h4>{video.topic}</h4>
            <a href={video.url}><img src={video.img}></img></a>

        </div>
    );
}
export default IndividualVideo;