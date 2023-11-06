import IndividualIntro from "../components/IndividualIntro";
import sajan_shrestha_img from "../images/Teams/sajan_shrestha_img.jpeg";
import Jathin_Bharadwaz_P_img from "../images/Teams/Jathin_Bharadwaz_P_img.jpeg";
import Jhagruth_Palakonda_img from "../images/Teams/Jhagruth_Palakonda_img.jpg";
import neer_mittal_img from "../images/Teams/neer_mittal_img.jpeg";
import nayana_nandyal_img from "../images/Teams/nayana_nandyal_img.jpeg";
import sumnima_rai_img from "../images/Teams/sumnima_rai_img.jpeg";
import geet_chhabra_img from "../images/Teams/geet_chhabra_img.jpeg";
import bicky_yadav_img from "../images/Teams/bicky_yadav_img.jpeg";
import aditya_chitransh_img from "../images/Teams/aditya_chitransh_img.jpeg";
import prince_shrestha_img from "../images/Teams/prince_shrestha_img.jpeg";
import prince_shrestha_img2 from "../images/Teams/prince_shrestha_img2.jpeg"
import dheepta_goswami_img from "../images/Teams/dheepta_goswami_img.jpeg";
import ishaan_prakash_img from "../images/Teams/ishaan_prakash_img.jpeg";
import gungun_kumari_img from "../images/Teams/gungun_kumari_img.jpeg";
import sravya_ravuri_img from "../images/Teams/sravya_ravuri_img.jpeg";
import sreekar_reddy_img from "../images/Teams/sreekar_reddy_img.jpeg";
import jhanavi_agarwal_img from "../images/Teams/jhanavi_agarwal_img.jpeg";
import jiya_puri_img from "../images/Teams/jiya_puri_img.jpeg";
import ayush_kumar_singh_img from "../images/Teams/ayush_kumar_singh_img.jpeg";
import harishith_bathala_img from "../images/Teams/harishith_bathala_img.jpeg";
import parkhi_manya_img from "../images/Teams/pakhi_manya_img.jpeg";
import ruchitankshi_amogh_img from "../images/Teams/ruchitankshi_amogh_img.jpeg";
function Team(){
    class Member{
        constructor(name,image,position,officeName){
            this.name=name;
            this.image=image;
            this.position=position;
            this.officeName=officeName;
        }
    }
    let neer_mittal=new Member("Neer Mittal",neer_mittal_img,"President","");
    let geet_chhabra=new Member("Geet Chhabra",geet_chhabra_img,"Vice President","");

    let jhanavi_agarwal=new Member("Jhanavi Agarwal",jhanavi_agarwal_img,"General Secretary","");
    let sajan_shrestha=new Member("sajan shrestha",sajan_shrestha_img,"Head","Online Resource");
    let aditya_chitransh=new Member("Aditya Chitransh",aditya_chitransh_img,"Treasurer","");

    let sumnima_rai=new Member("Sumnima Rai",sumnima_rai_img,"Head","Executive");
    let Jathin_Bharadwaz_P=new Member("Jathin Bharadwaz P",Jathin_Bharadwaz_P_img,"Head","Creative");

    let jiya_puri=new Member("Jiya Puri",jiya_puri_img,"Head","Logistic Team");
    let gungun_kumari=new Member("Gungun Kumari",gungun_kumari_img,"Member","Logistic Team");
    let bathala_harshith=new Member("Bathala Harhith",harishith_bathala_img,"Member","Logistic Team");
    let Jhagruth_Palakonda=new Member("Jhagruth Palakonda",Jhagruth_Palakonda_img,"Member","Logistic Team");

    let ayush_kumar_singh=new Member("Ayush Kumar Singh",ayush_kumar_singh_img,"Head","Social Media Team");
    let sravya_ravuri=new Member("Sravya Ravuri",sravya_ravuri_img,"Member","Social Media Team");
    let satvika_m=new Member("Satvika M",sajan_shrestha,"Member","Social Media Team");

    let sreekar_reddy=new Member("Sreekar Reddy",sreekar_reddy_img,"Head","Media Team");
    let ruchitankshi_amogh=new Member("Ruchitankshi Amogh",ruchitankshi_amogh_img,"Member","Media Team");
    let ishaan_prakash=new Member("Ishaan Prakash",ishaan_prakash_img,"Member","Media Team");

    let ayush_bhavanasi=new Member("Ayush Bhavanasi",sajan_shrestha,"Head","Graphic  Designer");
    let nayana_nandyal=new Member("Nayana Nandyal",nayana_nandyal_img,"Member","Graphic Designer");

    let prince_shrestha=new Member("Prince Shrestha",prince_shrestha_img,"Head","Promotions and Marketing");
    let deepta_goswami=new Member("Deepta Goswami",dheepta_goswami_img,"Member","Promotions and Marketing");
    let parkhi_manya=new Member("Parkhi Manya",parkhi_manya_img,"Member","Promotions and Marketing")
    let bicky_yadav=new Member("Bicky Yadav",bicky_yadav_img,"Memeber","Promotions and Marketing");

    return(
        <>
        <h1 style={{textAlign:'center'}}>Team</h1>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={neer_mittal}/><IndividualIntro obj={geet_chhabra}/>
        </div>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={jhanavi_agarwal}/><IndividualIntro obj={aditya_chitransh}/><IndividualIntro obj={sajan_shrestha}/>
        </div>
        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={Jathin_Bharadwaz_P}/><IndividualIntro obj={sumnima_rai}/>
        </div>

        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
        <IndividualIntro obj={jiya_puri}/><IndividualIntro obj={gungun_kumari}/>
            <IndividualIntro obj={bathala_harshith}/><IndividualIntro obj={Jhagruth_Palakonda}/>
        </div>

        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={ayush_kumar_singh}/><IndividualIntro obj={sravya_ravuri}/><IndividualIntro obj={satvika_m}/>
        </div>

        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={sreekar_reddy}/><IndividualIntro obj={ruchitankshi_amogh}/><IndividualIntro obj={ishaan_prakash}/>
        </div>

        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
            <IndividualIntro obj={ayush_bhavanasi}/><IndividualIntro obj={nayana_nandyal}/>
        </div>

        <div style={{display:'inline-block',textAlign:'center',width:'100%'}}>
        <IndividualIntro obj={prince_shrestha}/><IndividualIntro obj={deepta_goswami}/>
            <IndividualIntro obj={parkhi_manya}/><IndividualIntro obj={bicky_yadav}/>
        </div>

<div>

</div>
        </>
    );
}
export default Team;