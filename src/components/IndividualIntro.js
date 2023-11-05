import './IndividualIntro.css';
import telephone from '../images/telephone.png';
function IndividualIntro({obj}){
    return(
        <div className="individual-container">
            <img alt={obj.name} src={obj.image} className="profile-layout"></img>
            <h4>{obj.name}</h4>
            <p>{obj.officeName}</p>
            <p>{obj.position}</p>
            <span> <img alt="call" src={telephone} className="telephone"></img></span>
            <span>{obj.contact}</span>
        </div>
    );
}
export default IndividualIntro;