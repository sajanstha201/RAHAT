import './IndividualBook.css';
function IndividualBook({obj}){
    return(
        <div className="individual-container">
            <a href={obj.url}><img alt={obj.name} src={obj.image} className="book-image"></img></a>
            <h4>{obj.name}</h4>
            <h4>Rating: {obj.rating}</h4>
        </div>
    );
}
export default IndividualBook;