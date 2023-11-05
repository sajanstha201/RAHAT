import IndividualIntro from "../components/IndividualIntro";
import image from "../images/rahat_logo.jpeg";
import sajan_shrestha_img from "../images/Teams/sajan_shrestha_img.jpeg";
import Jathin_Bharadwaz_P_img from "../images/Teams/Jathin_Bharadwaz_P_img.jpeg";
import Jhagruth_Palakonda_img from "../images/Teams/Jhagruth_Palakonda_img.jpg";
function Team(){
    class Memeber{
        constructor(name,contact,image,position,officeName){
            this.name=name;
            this.contact=contact;
            this.image=image;
            this.position=position;
            this.officeName=officeName;
        }
    }
    let Jathin_Bharadwaz_P=new Memeber("Jathin Bharadwaz P",7416452788,Jathin_Bharadwaz_P_img,"Head","Creative");
    let Jhagruth_Palakonda=new Memeber("Jhagruth Palakonda",7981381543,Jhagruth_Palakonda_img,"Member","Operations Team");
    let sajan_shrestha=new Memeber("sajan shrestha",8073292155,sajan_shrestha_img,"Head","Online Resource")
    return(
        <>
        <h1 style={{textAlign:'center'}}>Team</h1>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={Jathin_Bharadwaz_P}/><IndividualIntro obj={Jhagruth_Palakonda}/>
        </div>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={sajan_shrestha}/><IndividualIntro obj={sajan_shrestha}/>
        </div>
<div>

</div>
        </>
    );
}
export default Team;