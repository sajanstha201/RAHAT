import './IndividualIntro.css';
import telephone from '../images/telephone.png';
function IndividualIntro({obj}){
    return(
        <div className="individual-container" style={{height:"400px",width:"300px"}}>
            <img alt={obj.name} src={obj.image} className="profile-layout"></img>
            <h4>{obj.name}</h4>
            <p>{obj.officeName}</p>
            <p>{obj.position}</p>
        </div>
    );
}
export default IndividualIntro;