import './Videos.css';
import IndividualVideo  from '../components/IndividualVideo';
import mental_health_is_common_to_all_of_us_img from "../images/Video/mental_health_is_common_to_all_of_us_img.png";
function Videos(){
    class video{
        super(topic,img,url){
            this.topic=topic;
            this.img=img;
            this.url=url;
        }
    }
    let video1=new video("Mental Health",mental_health_is_common_to_all_of_us_img,"https://www.ted.com/talks/vikram_patel_mental_health_for_all_by_involving_all?language=en");

return(
    <>

    <div className='video'>
    <h2>Video</h2>
    <IndividualVideo video={video1}/>
    </div>

    </>
);
}
export default Videos;