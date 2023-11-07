import './IndividualBook.css';
function IndividualBook({obj}){
    return(
        <div className="individual-book-container">
            <a href={obj.url}><img alt={obj.name} src={obj.image} className="book-image"></img></a>
            <p style={{margin:'0px'}}>{obj.name}</p>
        </div>
    );
}
export default IndividualBook;