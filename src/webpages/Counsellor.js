import './Counsellor.css'
import IndividualPost from '../components/IndividualPost';
import IndividualIntro from '../components/IndividualIntro';
import qrcode from '../images/qrcode.png'

function Counsellor(){
    class post{
        constructor(src){
            this.src=src
        }
    }
    let qr_code=new post(qrcode)
    class Member{
        constructor(name,image,position,officeName){
            this.name=name;
            this.image=image;
            this.position=position;
            this.officeName=officeName;
        }
    }
    let counsellor1=new Member("sajan shrestha",qrcode,"Counsellor","")
    let counsellor2=new Member("name",qrcode,"Counsellor","")
    return(
        <div style={{textAlign:'center'}}>
        <h1 >Counsellor Section</h1>
            <a href="https://forms.office.com/r/UBNqdQ4PxG" style={{textDecoration:'None',color:'black'}}>
                <h4 style={{fontSize:'30px'}}>RAHAT</h4>
                <h4 style={{fontSize:'30px'}}>Anonymous Counselling Form</h4>
                <div style={{margin:'auto',display:'block'}}>
                <IndividualPost post={qr_code}></IndividualPost>
            </div>
            </a>

            <div style={{display:'inline-block',width:'100%'}}>
            </div>

        </div>
    );
}
export default Counsellor;