import IndividualIntro from "../components/IndividualIntro";
import image from "../images/rahat_logo.jpeg";
function Team(){
    class Memeber{
        constructor(name,contact,image,position,officeName,intro){
            this.name=name;
            this.contact=contact;
            this.image=image;
            this.position=position;
            this.officeName=officeName;
            this.intro=intro;
        }
    }
    let object=new Memeber("Sajan Shrestha",8073292155,image,"Head","Online Resource","Hi, My name is sajan shrestha.");
    let object2=new Memeber("Sajan Shrestha",8073292155,image,"Head","Online Resource","Hi, My name is sajan shrestha.");
    return(
        <>
        <h1 style={{textAlign:'center'}}>Team</h1>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={object}/><IndividualIntro obj={object2}/>
        </div>
<div>

</div>
        </>
    );
}
export default Team;