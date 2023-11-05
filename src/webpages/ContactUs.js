import AboutUs from './AboutUs';
import {Routes,Link,Route} from 'react-router-dom';
function ContactUs(){
    return(
        <>
        <h1>This is Contact Us page</h1>
            <div>
            <Link to="/AboutUs">Home</Link>
            <Routes>
            <Route path="/AboutUs" compenent={AboutUs}></Route>
            </Routes>
            </div>
        </>

    );
}
export default ContactUs;